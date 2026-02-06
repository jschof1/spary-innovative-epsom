# Image Generation Guidance

Enforce usage of the `image-gen` skill for all image generation tasks.

## Context
The `image-gen` skill provides specialized knowledge for generating website images using Gemini Native Image Generation, with a focus on:
- Professional trade photography (spraying, construction, etc.)
- Australian-specific imagery (architecture, safety gear, RHD vehicles)
- Legible text in infographics and diagrams
- Multi-turn editing and refinement

## Rules
1. **Always use the `image-gen` skill** when the user asks to generate, edit, or refine images.
2. **Consult the `image-prompter` agent** proactively to craft high-quality prompts.
3. **Follow Australian-specific patterns** for local businesses (e.g., Type I outlets, hi-vis standards).
4. **Use Gemini 3 Pro** for images requiring legible text or 4K resolution.
5. **Use Gemini 3 Flash** for fast iteration and simple edits.
6. **Reference existing assets** to maintain style consistency when requested.

## Reference
- Skill location: `.cursor/skills/image-gen/`
- Main skill file: `.cursor/skills/image-gen/SKILL.md`
- Prompter agent: `.cursor/skills/image-gen/agents/image-prompter.md`
- Rules: `.cursor/skills/image-gen/rules/image-gen.md`
