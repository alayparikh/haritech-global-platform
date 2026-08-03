# Site imagery

Drop generated images here using **exactly** these filenames. Until a file exists, the page
falls back to the matching photo in `src/assets/` automatically (see
`src/components/site/SmartImage.tsx`), so nothing breaks while the set is being produced.

Append this style suffix to every prompt so the set reads as one shoot:

> Photorealistic industrial photography, wide cinematic framing, cool blue-teal industrial colour
> grade with deep navy shadows and cyan equipment highlights, soft directional daylight from high
> windows, slight haze, no text, no logos, no watermarks, no visible faces, no distorted machinery,
> clean composition with empty space in the lower third for text overlay, shot on 35mm, f/4, high
> detail, 8k.

Keep the lower third uncluttered — gradient overlays and headings sit there. Export JPEG ~80
quality, under ~350 KB each.

## families/ — 2000×800

| File | Prompt |
| --- | --- |
| `families/heavy-engineering-metals.jpg` | Massive steel fabrication bay: structural beams on trestles, overhead crane hook lowering, sparks from a distant welding station, stacked plate steel, cavernous industrial hall. |
| `families/process-chemical.jpg` | Chemical process plant exterior at blue hour: distillation columns, insulated pipe racks, valve manifolds, safety walkways, cooling vapour drifting across floodlights. |
| `families/food-dairy-lifesciences.jpg` | Immaculate stainless-steel hygienic processing hall: polished tanks, sanitary clamp piping, CIP skid, glossy epoxy floor, bright clean lighting with cool reflections. |
| `families/mobility-electronics.jpg` | Automotive final-assembly line with overhead conveyor carrying body shells, robotic arms, illuminated control panels, technicians at ESD workstations in the foreground. |
| `families/energy-renewables.jpg` | Rooftop and ground-mount solar array beside an industrial plant, wind turbines on the horizon, inverter cabinets and cable trays in the foreground, clear morning light. |
| `families/utilities-environment.jpg` | Industrial utility yard: bank of counter-flow cooling towers with vapour plumes, RO membrane skids and clarifier tanks nearby, stainless pipework and gauges. |

## industries/ — 1600×900

| File | Prompt |
| --- | --- |
| `industries/engineering-heavy-industries.jpg` | Turnkey heavy-machinery installation in progress: large machine base being lowered by crane onto grouted foundation bolts, riggers directing, engineering drawings on a site table. |
| `industries/metal-industries.jpg` | Rolling-mill floor with glowing hot steel billet moving through rollers, scale dust in the air, heat shimmer, operator behind a control pulpit window. |
| `industries/forging-casting.jpg` | Foundry pour: ladle tipping molten metal into a sand mould, orange glow lighting the workers' silhouettes, forging press and die racks behind. |
| `industries/concrete-mix.jpg` | Ready-mix concrete batching plant: aggregate silos, conveyor gantry, transit mixer loading under the chute, dust-suppression mist, blue sky. |
| `industries/chemical.jpg` | Chemical reactor hall: glass-lined reactors, agitator motors, jacketed vessels, colour-coded pipe runs, an operator reading a panel gauge. |
| `industries/petrochemical.jpg` | Petrochemical refinery: fractionation columns, heat exchangers, flare stack in the distance, dense pipe racks converging toward the camera at dusk. |
| `industries/plastic-extrusion.jpg` | Plastic extrusion line: extruder screw barrel, die head with molten polymer emerging, cooling water bath, haul-off unit and film winder, resin pellets in a hopper. |
| `industries/dairy.jpg` | Dairy processing plant: stainless milk silos, homogeniser and pasteuriser skid, sanitary butterfly valves and clamps, glossy hygienic floor, cool clean light. |
| `industries/food-beverages.jpg` | Beverage bottling line: PET bottles moving fast along a stainless conveyor through a filler carousel, motion blur on the bottles, sharp machinery. |
| `industries/sugar.jpg` | Sugar mill interior: cane crushing tandem mills, juice evaporator bodies, large steam pipework, bagasse conveyor overhead, warm dusty light beams. |
| `industries/pharma.jpg` | Pharmaceutical clean room: operators in white full-body gowns beside a tablet-coating machine, HEPA ceiling grilles, differential-pressure gauges, seamless white walls. |
| `industries/automobile.jpg` | Automotive body shop: array of orange robotic spot-welding arms working on a car body-in-white, sparks, safety cage, conveyor skid. |
| `industries/electronics.jpg` | Electronics SMT line: pick-and-place machine placing components on a green PCB, reflow oven, ESD-safe benches, anti-static mats, blue-lit clean workshop. |
| `industries/assembly-supply-chain.jpg` | High-bay automated warehouse: tall racking, AGV moving a pallet down the aisle, conveyor sortation loop, barcode scan station, crisp cool lighting. |
| `industries/renewable-energy.jpg` | Industrial rooftop solar plus battery energy-storage containers and inverter skids, cable trays, wind turbines beyond the plant boundary, morning light. |
| `industries/solar.jpg` | Ground-mounted solar farm at golden hour: long rows of tilted panels receding to the horizon, mounting structures and combiner boxes in the foreground. |
| `industries/water-treatment.jpg` | Effluent treatment plant: circular clarifier with rotating bridge, aeration tank with surface turbulence, RO membrane skid and dosing pumps under a canopy. |
| `industries/cooling-towers-fans.jpg` | Bank of industrial counter-flow cooling towers on a plant roof: large axial fan stacks, vapour plumes, header pipework and valves, technician on the walkway. |

## projects/ — 1600×900

| File | Prompt |
| --- | --- |
| `projects/hvac-retrofit.jpg` | Large air handling unit newly installed on a production-floor mezzanine, insulated ductwork branching overhead, balancing dampers and a controls panel, technician with a manometer. |
| `projects/dairy-piping.jpg` | Sanitary stainless process piping run through a dairy plant: orbital-welded lines on slotted supports, clamp fittings, insulation on cold lines, drainable slope visible. |
| `projects/energy-bop.jpg` | Balance-of-plant work at an industrial site: cable trays and support steelwork being erected beside inverter cabinets and a switchgear room, clear morning light. |

## Root replacements (optional)

These currently use `src/assets/hero-industry.jpg` and `src/assets/about-facility.jpg`. To replace,
overwrite those two files rather than adding new ones.

| Intended file | Size | Prompt |
| --- | --- | --- |
| `src/assets/hero-industry.jpg` | 2400×1350 | Wide interior of a large modern Indian heavy-engineering plant: overhead gantry crane, robotic welding cells, stainless process piping running along the ceiling, workers in navy uniforms and white hard hats at a distance. Depth going far back into the hall. |
| `src/assets/about-facility.jpg` | 1600×1200 | Two technicians in navy uniforms assembling a precision skid-mounted machine on a clean production bench, calipers and drawings on the table, organised tool wall behind, warm task lighting against cool ambient light. |
