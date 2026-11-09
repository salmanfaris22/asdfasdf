# 3D assets

All from [Poly Haven](https://polyhaven.com), CC0 (public domain). No attribution required; listed for the record.
Loaded by bed3d.js only when the site is served over http(s). On file:// the drawn textures are used instead.

| File | Poly Haven asset | Used for |
|---|---|---|
| tex/oak-* | oak_veneer_01 | bed frame, headboard, legs, slats, oak stand, night slat wall (stained) |
| tex/floor-* | laminate_floor_02 | morning floor, 11:40 pm floor |
| tex/plaster-* | painted_plaster_wall | wall relief (both rooms, 11:40 pm wall) |
| tex/rug-* | poly_wool_herringbone | morning rug relief |
| tex/linen-* | rough_linen | pillowcases, sheet and duvet relief |
| tex/jacquard-* | quatrefoil_jacquard_fabric | knitted jacquard relief on the plain mattress covers |
| env/room-morning.hdr | relax_inn_seaview_suite (1k) | morning room light and reflections |
| env/view-morning.webp | hilly_terrain_01 (tonemapped, cropped) | view through the morning glass wall |
| env/view-night.webp | qwantani_dusk_2 (tonemapped, cropped) | view through the night windows |
| models/potted_plant_02.glb | potted_plant_02 | plant on the morning bedside table |
| models/potted_plant_01.glb | potted_plant_01 | floor plant in the night room |
| models/potted_plant_04.glb | potted_plant_04 | succulent on the morning oak stand |

Textures: WebP (cwebp); plaster, rug, linen and jacquard keep only relief + roughness (the materials keep their own colour). Models: gltf-transform optimize (quantize, WebP textures at 1024, simplified).
`-sm` textures are the 1k versions phones load.
