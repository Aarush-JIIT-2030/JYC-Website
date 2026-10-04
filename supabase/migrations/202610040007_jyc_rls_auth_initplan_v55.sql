-- JYC V55 RLS performance hardening.
-- Wrap direct auth.uid() calls in SELECT so PostgreSQL evaluates the auth lookup once
-- per statement instead of once per row. Policy semantics are otherwise unchanged.
do $$
declare
  r record;
  q text;
  w text;
begin
  for r in
    select schemaname, tablename, policyname, qual, with_check
    from pg_policies
    where schemaname='public'
      and (coalesce(qual,'') like '%auth.uid()%' or coalesce(with_check,'') like '%auth.uid()%')
  loop
    q:=replace(r.qual,'auth.uid()','(select auth.uid())');
    w:=replace(r.with_check,'auth.uid()','(select auth.uid())');
    if r.qual is not null and r.with_check is not null then
      execute format('alter policy %I on %I.%I using (%s) with check (%s)',r.policyname,r.schemaname,r.tablename,q,w);
    elsif r.qual is not null then
      execute format('alter policy %I on %I.%I using (%s)',r.policyname,r.schemaname,r.tablename,q);
    elsif r.with_check is not null then
      execute format('alter policy %I on %I.%I with check (%s)',r.policyname,r.schemaname,r.tablename,w);
    end if;
  end loop;
end $$;
