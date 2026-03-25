# Walkthrough - Enhanced Certificate Interactivity

The Certificates section now mirrors the sleek, interactive feel of the Projects section, making it easier than ever for visitors to view your credentials.

## Changes Made

### 1. Consistent Card Interactivity
- **Link Wrapping**: Just like your projects, the **entire certificate card** is now a clickable link.
- **External Redirection**: Clicking any certificate automatically opens the respective Google Drive file in a new browser tab (`target="_blank"`).

### 2. Matching Hover Experience
- **Overlay Animation**: Added a primary-colored overlay that fades in when hovering over a certificate.
- **Icon Feedback**: Included a `FaExternalLinkAlt` icon that pops up on hover, providing clear visual feedback that the card is a link to the original document.
- **Title Highlighting**: The certificate title now changes color on hover, matching the behavior of your project titles.

### 3. Streamlined UI
- Removed the secondary modal popup to focus on a direct, fast viewing experience as requested ("same how you kept for the projects").

## Verification

- [x] **Interaction Symmetry**: Verified that the hover and click behaviors in Certificates perfectly match the Projects section.
- [x] **Link Reliability**: Confirmed all 3 certificates link to their correct destinations.
- [x] **New Tab Validation**: All external links open correctly in new tabs.

## How to Test
1. Go to the "Certificates" section.
2. Hover over any certificate card to see the new blue overlay and icon.
3. Click on the card to instantly open the certificate in a new tab.
