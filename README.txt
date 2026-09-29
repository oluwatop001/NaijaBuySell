FINAL FIX: replace the existing marketplace.js in GitHub with this file.

The problem was a function-name mismatch: index.html calls NBS_MARKETPLACE.approvedListings(), while the previous marketplace.js only exposed getApproved(). This version exposes both names.

It also keeps listing-images private and uses temporary signed image URLs.
