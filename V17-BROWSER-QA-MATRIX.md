# V17 Browser QA Matrix

This is the manual/browser automation release matrix. A connected Supabase project and real role accounts are required for the live/authenticated rows.

## Public
- `/` hero, Phoenix nodes, event feed, club discovery, Moments, JTV, footer links.
- `/discover` search/filter/navigation.
- `/clubs` search/filter/sort and club detail.
- `/events` filters, event states, registration links.
- `/events/:id` save, share, QR, reminder, calendar and registration.
- `/gallery` album/lightbox/navigation.
- `/projects` and `/projects/submit` validation + submission.
- `/calendar` JYC / Academic / All views.
- `/map` 62/128 switch, venue search, directions/Pulse links.
- `/guide`, `/resources`, `/team`, `/about`, `/contact`, `/recruitment`, `/download`.
- `/my-jyc` signed-out saved state.

## Student account
- Sign in / sign out.
- Registration appears in My JYC.
- Registration cancellation confirms first, then updates state.
- Saved clubs/events survive navigation and reload.
- Calendar/ICS/reminder actions work.
- Notifications page loads only permitted data.

## Admin roles
For each active role, verify both UI visibility and Supabase authorization:
- super_admin
- jyc_admin
- clubs_admin
- events_admin
- gallery_admin
- content_admin
- club_admin

Verify create/edit/publish/archive/delete/review boundaries match the role matrix. A client-side hidden button is not considered security; the database/RPC must reject unauthorized writes.

## Responsive
Run at 320, 360, 390, 430, 768, 1024 and 1440px widths. Test keyboard navigation at desktop widths and touch interactions on mobile widths.

## Accessibility
- Tab through every dialog and form.
- Escape closes overlays/dialogs.
- Enter activates focused confirmation action.
- Reduced-motion preference removes nonessential motion.
- Images have meaningful alt text or intentional decorative empty alt.
- Focus remains visible.
