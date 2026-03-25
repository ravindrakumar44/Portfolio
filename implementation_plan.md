# Implementation Plan - Enhance Certificate Interactivity

Align the Certificates section's interaction model with the Projects section by adding hover overlays and direct external linking.

## Proposed Changes

### [Frontend]

#### [MODIFY] [Certificates.jsx](file:///c:/Users/Dell/OneDrive/Documents/Portfolio%202/frontend/src/sections/Certificates.jsx)
- **Modify Certificate Card**:
    - Wrap the card content in an `<a>` tag linking to `cert.link`.
    - Add a hover overlay (`absolute inset-0`) that appears on card hover.
    - Inside the overlay, show a "View" icon (e.g., `FaExternalLinkAlt`).
    - Remove or adjust the existing `onClick` modal behavior if the user prefers direct linking (though I'll try to keep both if possible, or prioritize the external link as requested). *Decision*: The user said "when I click on it, then it should open the certificate", which usually means the external link.
    - Ensure `target="_blank"` and `rel="noopener noreferrer"`.

## Verification Plan

### Manual Verification
1.  **Hover State**: Verify that a primary-colored overlay appears when hovering over any certificate card.
2.  **Click Behavior**: Click a card and confirm it opens the Google Drive link in a new tab.
3.  **UI Consistency**: Compare the hover effect with the Projects section to ensure they look and feel identical.
