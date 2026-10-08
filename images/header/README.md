# Profile banner

The banner preserves the pushing-`PROBLEM` motif and quote from Arvin's original image. The scene, real portrait, and text are separate sources. Both layouts adapt their colors to the page theme; the narrower layout keeps the quote readable on phones.

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

The built-in image editor was used for the scene only. Reference: the original `problem-solving-profile.jpg` banner. The portrait and quote are composed separately by the builder.

```text
Use case: precise-object-edit.
Asset type: an isolated photographic scene layer for an editable GitHub profile banner.
Input image 1 is the edit target. Preserve the original visual idea: a full-body businessman facing right, leaning backward with one leg extended so his foot physically pushes the first letter of the large three-dimensional word PROBLEM. Keep the sense of effort and the word being displaced toward the right. The extended shoe must touch the word; retain believable anatomy, balance, and perspective.
Improve the original low-resolution scene into sharp, restrained editorial photographic quality. Use a graphite suit with natural mid-gray highlights, realistic skin and cloth, and refined concrete-gray extruded typography. Render the word exactly PROBLEM, P-R-O-B-L-E-M, with all seven letters large, complete, and readable. Preserve the full man and the complete word in a wide composition with modest margins, roughly 3:2 canvas. Lighting is soft studio lighting with enough midtone edge definition to read against white and charcoal backgrounds. The 3D letter fronts are medium-to-light neutral gray, with realistic darker side faces and controlled texture rather than distressed/grunge type.
Remove the circular portrait, the wall and floor background, all quote text, all attribution text, all existing rounded banner framing, and every other element. Output only the man and the pushed word, isolated on a truly transparent background with a small soft contact shadow if needed. The portrait and exact quote will be added separately as editable layers; do not incorporate them into this scene. No neon, no dots, no swooshes, no logos, no extra wording, no UI mockup, no cartoon, no watermark.
```
