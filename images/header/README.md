# Profile banner

The person and the pushed word `PROBLEM` lead the banner. The full quote and attribution sit beneath the word in quieter type. The real portrait remains a separate, replaceable source. Both layouts adapt their colors to the page theme; the mobile layout wraps the quote beneath `PROBLEM` and places the portrait below the figure.

## Change the portrait

1. Replace `images/profile.jpg` with your new JPG portrait.
2. From the repository root, run:

   ```sh
   node scripts/build-profile-banner.mjs
   ```

3. Commit the new portrait and both regenerated SVGs.

For a PNG or WebP portrait, pass its path:

```sh
node scripts/build-profile-banner.mjs images/my-new-portrait.png
```

The banner uses this repository image. Changing your GitHub account avatar separately does not rebuild it.

## Sources

- Portrait: `images/profile.jpg`, preserved without AI retouching.
- Scene: `problem-solving-scene.webp`, an AI-assisted refinement of the original banner's person and moving word, with transparency.
- Quote, attribution, layout, and colors: `scripts/build-profile-banner.mjs`.
- Published outputs: `profile.svg` and `profile-mobile.svg`, embedded in the profile README.

The builder uses only Node.js built-in modules. Embedded image data makes each SVG self-contained; external image links inside SVGs are unreliable when an SVG is displayed as an image. Rebuild both layouts after changing a source.

## Scene refinement prompt

The built-in image editor was used for the scene only. References: the prior isolated scene and Arvin's banner-layout feedback. The portrait and quote remain separate sources.

```text
Use case: identity-preserve / compositing refinement.
Asset type: primary photographic artwork for an editable GitHub profile banner.
Image 1 is the existing isolated scene to edit. Image 2 shows the current banner composition that needs better hierarchy.
Keep the SAME businessman from image 1: same face, hair, suit, full-body stance, backward lean, extended leg, and physical shoe contact with the first letter P. Keep all seven letters and the original visual idea of the man pushing/displacing the 3D word PROBLEM. Do not replace the man or invent another pose.
Recompose the isolated scene for a wider, approximately 2:1 landscape canvas. The complete man and the large word PROBLEM are the hero, filling the useful upper and middle portion. The word occupies the right half prominently; preserve its concrete-gray front faces, darker extrusion, slight tilt of the pushed P, realistic contact, natural studio light, and sharp high-resolution edges. Keep the entire head, planted foot, extended shoe and all seven letters inside the frame. The word must be exactly PROBLEM, P-R-O-B-L-E-M.
Leave clear transparent negative space DIRECTLY BELOW the word PROBLEM, aligned with that word's left edge, large enough for a compact quotation and its attribution. That space belongs below the word, not beside it. The man may extend down along the left side of this text space. Maintain believable proportions; do not stretch limbs just to fill the canvas.
Output only the refined man-and-PROBLEM artwork on a genuinely transparent background. Remove all quote and attribution text from image 2; those will be set precisely as quieter, editable SVG text below PROBLEM. No portrait, no surrounding card, no background wall or floor, no neon, no dots, no glows, no extra wording, no UI mockup, no watermarks.
```
