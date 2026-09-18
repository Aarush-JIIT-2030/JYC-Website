# Supabase project setup

Run migrations in this order:

1. `00-core-migration.sql`
2. `relational-v2.sql`
3. `platform-v3.sql`
4. `platform-v4-fix.sql`
5. `final-role-hardening.sql`

For an existing development database containing the accidental starter club, run:

`maintenance/00-remove-legacy-demo-data.sql`

Edge Functions:

- `functions/admin-management`
- `functions/send-notification`
- `functions/backup-site-data`

Keep all privileged secrets server-side in Supabase.
