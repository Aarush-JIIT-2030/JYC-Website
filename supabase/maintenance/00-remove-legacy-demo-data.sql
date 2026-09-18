-- JYC CLEAN START — one-time cleanup
-- Run this ONLY if your current Supabase content store still contains the old
-- demo club named "abhivyakti". It removes that demo club and its linked demo
-- event/gallery records without touching your administrator accounts.
-- Do not run this after real JYC content has been added unless you intend to
-- remove a club actually named "abhivyakti".

update public.jyc_site_data
set data = jsonb_set(
  jsonb_set(
    jsonb_set(
      jsonb_set(
        data,
        '{clubs}',
        coalesce((
          select jsonb_agg(c)
          from jsonb_array_elements(coalesce(data->'clubs','[]'::jsonb)) c
          where lower(trim(c->>'name')) <> 'abhivyakti'
        ), '[]'::jsonb),
        true
      ),
      '{events}',
      coalesce((
        select jsonb_agg(e)
        from jsonb_array_elements(coalesce(data->'events','[]'::jsonb)) e
        where lower(trim(e->>'club')) <> 'abhivyakti'
          and lower(trim(e->>'clubId')) <> 'abhivyakti'
      ), '[]'::jsonb),
      true
    ),
    '{gallery}',
    coalesce((
      select jsonb_agg(g)
      from jsonb_array_elements(coalesce(data->'gallery','[]'::jsonb)) g
      where lower(trim(g->>'association')) <> 'abhivyakti'
        and lower(trim(g->>'clubId')) <> 'abhivyakti'
    ), '[]'::jsonb),
    true
  ),
  '{homepage}',
  coalesce(data->'homepage','{}'::jsonb),
  true
), updated_at = now()
where id = 'main';

select data->'clubs' as remaining_clubs from public.jyc_site_data where id='main';
