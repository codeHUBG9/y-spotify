## There are some more step to use superbase

SignUp|Login
Create Project | Get project URL|NON_KEY|ROLE_KEY
Go to SQl Editor>> Stripe Subscription>> RUN Query it will create table

Create your custom table also and provide security access to created table
Create bucket for and map with security role

## Generating Types

https://supabase.com/docs/guides/api/rest/generating-types#generating-types-using-supabase-cli

npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > types_db.ts
