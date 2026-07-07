# Figma Screen Recreation Rules

## Purpose

You are helping me recreate an existing app screen from code into a Figma design file.

Your job is NOT to redesign, reinterpret, simplify, beautify, or approximate the screen.

Your job is to inspect the screen/code carefully and recreate the design in Figma with maximum visual fidelity, clean layer hierarchy, proper grouping, and editable design structure.

## Critical Objective

The Figma screen must match the coded screen as closely as possible in layout, spacing, typography, colors, sizing, hierarchy, shadows, gradients, corner radii, component structure, and visual balance.

Before creating or modifying the Figma screen, carefully analyze every visible element and component used in the screen.

You must check and replicate all rules below.

## 1. Screen Structure

- Match the exact screen size / frame size used in the code or screenshot reference.
- Preserve the same safe areas, status bar spacing, bottom navigation spacing, and scrollable area behavior.
- Do not compress, stretch, or reflow elements unless the code explicitly does so.
- Keep the screen visually consistent with the existing Bodhi app design language.

## 2. Component-by-Component Replication

For every visible component in the coded screen, recreate the same component in Figma:

- Cards
- Buttons
- Text blocks
- Icons
- Tabs
- Navigation bars
- Input fields
- Progress indicators
- Avatars
- Orbs
- Badges
- Pills
- Dividers
- Background gradients
- Overlays
- Inner containers
- CTA areas
- Decorative elements

Do not skip small elements. Do not merge multiple coded components into one vague visual block. Every meaningful UI element must exist in Figma.

## 3. Exact Visual Matching

For each component, match:

- Width
- Height
- X/Y position
- Padding
- Margin
- Alignment
- Border radius
- Fill color
- Stroke color
- Stroke width
- Shadow
- Blur
- Opacity
- Gradient direction
- Text size
- Font weight
- Line height
- Letter spacing
- Icon size
- Button height
- Card proportions
- Internal spacing between child elements

The output should look like the actual coded screen, not like a loosely inspired version.

## 4. Do Not Create Image-Like Assets Using Shapes

This is extremely important.

If the code uses an actual image, avatar, illustration, profile photo, orb image, or visual asset, do NOT try to recreate that image manually using circles, ovals, rectangles, polygons, or layered vector shapes.

Examples of what NOT to do:

- Do not create a face avatar using circles and ovals.
- Do not create a profile image using shapes.
- Do not create an illustration using multiple vector shapes.
- Do not fake an image asset by drawing it manually in Figma.
- Do not build image details through grouped geometric shapes.

Instead:

- Use a simple placeholder frame/circle/rectangle with a clean solid fill.
- Label it clearly, for example: "Avatar image placeholder", "Orb image placeholder", "Meditation thumbnail placeholder", "Profile photo placeholder".
- Keep the placeholder size, shape, border radius, and position exactly matching the coded image placement.
- I will manually replace the placeholder with the correct image in Figma later.

Allowed:

- Simple solid circle for avatar placeholder.
- Simple rounded rectangle for thumbnail placeholder.
- Simple ellipse/circle for orb placeholder.
- Simple image container with solid fill.

Not allowed:

- Shape-built drawings pretending to be real images.

## 5. Grouping and Layer Organization

Every component must be grouped properly.

Do not leave loose elements scattered across the Figma file.

For every major UI section, create a clear parent group/frame.

Examples:

- "Dopameter Card"
  - "Dopameter Header"
  - "Dopameter Score"
  - "Today Progress Label"
  - "Check-in Button"
  - "Summary Text"
  - "Background Layer"
- "Bottom Navigation"
  - "Today Tab"
  - "Explore Tab"
  - "Bro Center Action"
  - "Sessions Tab"
  - "Journey Tab"
- "Practice Summary Card"
  - "Card Header"
  - "Main Metric"
  - "Secondary Metric"
  - "Progress Indicator"
- "Profile Header"
  - "Avatar Placeholder"
  - "Greeting Text"
  - "Settings Icon"

Each card must contain all of its internal elements inside that card's group/frame.

For example:

If there is a Dopameter card, all text, buttons, icons, gradients, progress visuals, labels, and decorative layers inside that card must be nested inside the "Dopameter Card" group/frame.

You should be able to click the parent card group and move the entire card without leaving any child elements behind.

## 6. Use Frames Where Possible

Use Figma frames instead of random groups wherever useful, especially for:

- Cards
- Navigation bars
- Buttons
- Sections
- Repeating components
- Rows
- Columns
- Header areas
- Footer areas

Use auto layout where it makes sense, but do not let auto layout distort the exact visual placement of the coded screen.

Priority order:

1. Visual accuracy
2. Clean hierarchy
3. Editability
4. Auto layout

Do not sacrifice visual accuracy just to force auto layout.

## 7. Naming Conventions

Use clean, readable layer names.

Do not leave layers named:

- Rectangle 143
- Ellipse 92
- Group 56
- Vector 18
- Text 22

Instead use names like:

- "Primary CTA Button"
- "Avatar Placeholder"
- "Dopameter Score Text"
- "Card Background"
- "Progress Ring Placeholder"
- "Section Title"
- "Bottom Nav Background"
- "Selected Tab Icon"
- "Inactive Tab Label"

Every important layer should have a meaningful name.

## 8. Typography

Match the coded typography as closely as possible:

- Font family
- Font weight
- Font size
- Line height
- Letter spacing
- Color
- Alignment
- Text wrapping
- Text hierarchy

If the exact font is unavailable in Figma, use the closest available font and preserve visual hierarchy.

Do not randomly change text sizes or weights.

## 9. Colors, Gradients, Shadows, and Effects

Extract and apply exact values wherever possible:

- Hex colors
- RGBA opacity
- Linear/radial gradients
- Shadow blur
- Shadow spread
- Shadow offset
- Border opacity
- Glassmorphism blur
- Background overlays

If exact values are difficult to extract, visually match them as closely as possible and keep the same mood and depth.

## 10. Icons

If the code uses icons:

- Use matching Figma icons where possible.
- Keep icon size, stroke width, color, and alignment consistent.
- Do not replace icons with unrelated alternatives.
- If the exact icon cannot be found, use a simple placeholder icon and label it clearly.

## 11. Spacing and Alignment Check

After creating the Figma screen, do a final pass and check:

- Are all cards aligned correctly?
- Are horizontal paddings consistent?
- Are vertical gaps matching the coded screen?
- Are buttons placed exactly where they should be?
- Are text blocks visually balanced?
- Are elements inside each card properly centered/aligned?
- Is the bottom navigation in the correct position?
- Is there any extra empty space that does not exist in the coded screen?
- Is anything overlapping incorrectly?
- Are all child elements inside their correct parent group/frame?

## 12. Do Not Make Creative Changes

Do not redesign the screen.
Do not change colors.
Do not change layout.
Do not improve the design unless I explicitly ask.
Do not add new decorative elements.
Do not remove existing elements.
Do not invent missing content.
Do not create extra visual polish that is not present in the code.

This task is a faithful code-to-Figma translation.

## 13. Final Quality Check

Before finishing, compare the Figma output against the coded screen/reference and verify:

- Every visible element from the code exists in Figma.
- Every component is grouped inside the correct parent frame.
- No loose elements are left floating outside their parent component.
- Image areas are represented only as clean placeholders, not shape-built illustrations.
- The screen looks visually consistent with the coded version.
- Layer names are clean and editable.
- The structure is easy to inspect, select, edit, and replace assets manually.

If anything is uncertain, prefer a simple editable placeholder over trying to visually fake it.

The final Figma design should be accurate, clean, grouped, editable, and production-friendly.
