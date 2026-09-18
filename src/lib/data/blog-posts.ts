export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  featured: boolean;
  imageUrl: string;
  readTime: string;
}

export interface BlogPostFull extends BlogPostMeta {
  content: string;
}

export const blogCategories = [
  'All',
  'Drain Cleaning',
  'Water Heater',
  'Leak Repair',
  'Emergency Plumbing',
  'Maintenance',
  'Bathroom Remodel',
] as const;

export const blogPosts: BlogPostFull[] = [
  {
    slug: '5-signs-you-need-drain-cleaning',
    title: '5 Warning Signs Your Drains Need Professional Cleaning',
    excerpt:
      'Slow drains are just the beginning. Learn the top 5 warning signs that your drains are heading toward a serious clog — and how to prevent it.',
    category: 'Drain Cleaning',
    author: 'McKinney Plumbing Team',
    publishedAt: '2026-08-15',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '4 min read',
    content: `
Slow drains are annoying, but they are also a warning sign that something bigger may be building up in your pipes. Here are the top 5 signs you need professional drain cleaning — before things get worse.

## 1. Slow Draining Sinks, Tubs, or Showers

If water pools up and drains slowly, you likely have a partial blockage. Hair, soap scum, grease, and mineral buildup are the most common culprits. A professional cleaning clears the clog completely — unlike store-bought chemicals that only punch a small hole through it.

## 2. Gurgling Sounds from Drains

Gurgling or bubbling sounds coming from your drains or toilet after you flush are a sign that air is being trapped behind a blockage. This is especially common in older McKinney homes with cast iron sewer lines.

## 3. Recurring Clogs

If you are clearing the same drain over and over, there is a deeper issue that snaking from the surface is not solving. Hydro-jetting scours the interior of the pipe clean, removing all buildup from the pipe walls.

## 4. Multiple Slow Drains at Once

When multiple drains in your home are slow simultaneously, the problem is likely in your main sewer line, not individual fixture drains. This requires professional intervention immediately.

## 5. Bad Odors from Drains

Foul smells coming from your drains indicate organic buildup (food, grease, hair) that is decomposing in your pipes. A thorough cleaning eliminates both the blockage and the odor.

## When to Call Us

If you are experiencing any of these symptoms, call McKinney Plumbing & Drain Clean Services. We offer professional drain cleaning services throughout McKinney and Collin County, TX.
    `,
  },
  {
    slug: 'tankless-vs-tank-water-heater',
    title: 'Tankless vs. Tank Water Heater: Which Is Right for Your McKinney Home?',
    excerpt:
      'A complete comparison of tank and tankless water heaters for Texas homeowners — covering cost, efficiency, lifespan, and installation.',
    category: 'Water Heater',
    author: 'McKinney Plumbing Team',
    publishedAt: '2026-08-01',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    readTime: '6 min read',
    content: `
Choosing a new water heater is one of the most important plumbing decisions for your home. Here is how tank and tankless systems compare for McKinney homeowners.

## Tank Water Heaters

Traditional tank heaters store 40–80 gallons of hot water. They are less expensive upfront and simpler to install. However, they use energy continuously to keep water hot, even when you are not using it.

## Tankless Water Heaters

Tankless (on-demand) units heat water only when you need it. They are more energy-efficient, take up less space, and typically last longer — but cost more to purchase and install.

## Cost Comparison

Tank units: $800–$1,500 installed. Tankless units: $2,500–$4,500 installed. Over 10–15 years, tankless often saves money on energy bills in Texas homes with high hot water usage.

## Which Should You Choose?

Choose a tank if you have a tight budget or need a quick replacement. Choose tankless if you want long-term savings, have limited space, or plan to stay in your home 10+ years.

## Need Help Deciding?

Our licensed plumbers will assess your home, usage patterns, and budget to recommend the best option. Call us for a free consultation.
    `,
  },
  {
    slug: 'how-to-prevent-slab-leaks',
    title: 'How to Prevent Slab Leaks in North Texas Homes',
    excerpt:
      'North Texas clay soil is tough on underground pipes. Here is what every McKinney homeowner should know to prevent costly slab leaks.',
    category: 'Leak Repair',
    author: 'McKinney Plumbing Team',
    publishedAt: '2026-07-20',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    readTime: '5 min read',
    content: `
Slab leaks are one of the most expensive plumbing problems a North Texas homeowner can face. Understanding the causes helps you prevent them.

## Why McKinney Homes Are at Risk

Collin County sits on expansive clay soil that shifts dramatically with moisture changes. This movement stresses copper and PEX pipes embedded in your foundation slab, causing cracks and leaks over time.

## Warning Signs of a Slab Leak

Watch for unexplained increases in your water bill, warm spots on floors, the sound of running water when all taps are off, or cracks appearing in walls or flooring.

## Prevention Tips

Maintain consistent soil moisture around your foundation during dry spells. Avoid planting large trees near your slab — roots can crush pipes. Have your water pressure checked annually; high pressure accelerates pipe wear.

## What to Do If You Suspect a Leak

Do not wait. Slab leaks worsen quickly and can cause foundation damage. Our leak detection specialists use acoustic and thermal equipment to locate leaks without unnecessary demolition.

## Professional Inspection

We recommend a plumbing inspection every 2–3 years for homes over 15 years old in McKinney. Early detection saves thousands in repair costs.
    `,
  },
  {
    slug: 'hard-water-effects-mckinney',
    title: 'Hard Water in McKinney, TX: What It Means for Your Plumbing',
    excerpt:
      'Collin County has some of the hardest water in Texas. Discover how mineral buildup affects your pipes, appliances, and water heater — and what to do.',
    category: 'Maintenance',
    author: 'McKinney Plumbing Team',
    publishedAt: '2026-07-05',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1607400201515-c2c41c04d3b7?w=800&q=80',
    readTime: '5 min read',
    content: `
If you live in McKinney, you likely deal with hard water every day — even if you do not realize it. Here is how it affects your plumbing and what you can do.

## What Is Hard Water?

Hard water contains high levels of calcium and magnesium minerals. Collin County water typically measures 12–18 grains per gallon — classified as very hard.

## Effects on Your Plumbing

Mineral deposits (scale) build up inside pipes, reducing water flow over time. Faucets and showerheads clog. Water heaters lose efficiency as sediment accumulates at the bottom of the tank, increasing energy costs.

## Signs You Have Hard Water

White crusty buildup on fixtures, spots on dishes after washing, dry skin and hair after showering, and clothes that feel stiff after laundry are all common signs.

## Solutions

A whole-house water softener removes minerals before they enter your plumbing. Water heater flushing every 1–2 years removes sediment buildup. We also install point-of-use filters for drinking water.

## Maintenance Plan

Our preventive maintenance program includes water heater flushing, pressure testing, and hard water assessment — keeping your system running efficiently year-round.
    `,
  },
  {
    slug: 'when-to-call-emergency-plumber',
    title: 'When Should You Call an Emergency Plumber? 7 Situations',
    excerpt:
      'Not every plumbing problem is an emergency — but some definitely are. Learn the 7 situations that require an immediate call to your plumber.',
    category: 'Emergency Plumbing',
    author: 'McKinney Plumbing Team',
    publishedAt: '2026-06-18',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    readTime: '4 min read',
    content: `
Knowing when to call an emergency plumber can save your home from serious damage. Here are 7 situations that cannot wait until morning.

## 1. Burst or Broken Pipes

A burst pipe can release hundreds of gallons of water per hour. Shut off your main water valve immediately and call us.

## 2. Sewage Backup

Raw sewage backing up into your home is a health hazard. Do not use any drains and call for emergency service right away.

## 3. No Water at All

Complete loss of water pressure may indicate a major line break. This requires immediate professional diagnosis.

## 4. Gas Smell Near Water Heater

If you smell gas near your water heater or any gas appliance, leave the house and call your gas company first, then us.

## 5. Flooding from Water Heater Failure

A failed water heater can flood your garage or utility room quickly. Turn off the water supply to the unit and call for help.

## 6. Overflowing Toilet That Will Not Stop

If plunging does not work and water is overflowing, the blockage may be in your main line. Stop using all plumbing fixtures.

## 7. Frozen Pipes in Winter

North Texas gets occasional hard freezes. If pipes freeze, do not use open flame to thaw them — call a professional to prevent bursting.

## We Are Available 24/7

McKinney Plumbing responds to emergencies within 30–60 minutes throughout Collin County. Save our number before you need it.
    `,
  },
  {
    slug: 'bathroom-remodel-plumbing-guide',
    title: 'Bathroom Remodel Plumbing: A Complete Guide for Homeowners',
    excerpt:
      'Planning a bathroom renovation in McKinney? Here is everything you need to know about the plumbing side of a bathroom remodel.',
    category: 'Bathroom Remodel',
    author: 'McKinney Plumbing Team',
    publishedAt: '2026-06-01',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    readTime: '7 min read',
    content: `
A bathroom remodel is exciting — but the plumbing work is what makes or breaks the project. Here is your complete guide.

## Step 1: Plan Before You Demo

Map out your new layout before removing anything. Moving a toilet, shower, or vanity more than a few feet requires new drain and supply lines — which adds significant cost.

## Step 2: Check Your Existing Plumbing

Older McKinney homes may have galvanized or cast iron pipes that should be replaced during a remodel. This is the perfect time to upgrade to modern PEX or copper.

## Step 3: Permits and Codes

Most bathroom remodels in McKinney require plumbing permits for fixture changes, drain modifications, or water heater relocation. We handle all permit applications and inspections.

## Step 4: Rough-In Plumbing

Rough-in is the hidden work — drain lines, vent stacks, and water supply lines installed inside walls before drywall goes up. Getting this right is critical.

## Step 5: Fixture Installation

Toilets, tubs, showers, vanities, and faucets are installed after finishes are complete. We coordinate with your contractor to stay on schedule.

## Step 6: Final Inspection and Testing

We pressure-test all lines, check for leaks, and ensure every fixture operates correctly before signing off.

## Get a Free Estimate

Whether you are doing a full gut remodel or a simple fixture upgrade, our team provides upfront pricing and expert guidance. Call us to discuss your project.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPostFull | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
