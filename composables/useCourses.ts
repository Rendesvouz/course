export const useCourses = () => {
  const courses = [
    {
      slug: 'zoho-campaign-mastery',
      title: "Zoho Campaign Mastery",
      description:"Learn how to build, automate, and optimize high-converting email campaigns using Zoho Campaigns.Segment audiences, run smart follow-ups, and let your email marketing work consistently without manual effort.",
        
      image: "https://placehold.co/600x400/fdf2f2/bc0c34?text=Email+Automation",
      rating: "4.8",
      shortTitle: "Email",
      whatYouWillLearn: [
        "How to set up automated email sequences that nurture leads.",
        "The secret to writing compelling email copy that converts.",
        "Using Zoho Campaigns to track and optimize your funnels.",
        "Building a hands-free system that generates income 24/7."
      ],
      paymentLink: 'https://paystack.com/buy/zoho-campaign-mastery-feietz'
    },
    {
      slug: 'lead-generation',
      title: "Lead Generation Using Scrappy",
      description:
        "Learn how to find ready-to-buy prospects daily, stop begging people to buy, and build a real list of interested buyers. No leads = no money. This fixes that.",
      image: "https://placehold.co/600x400/fdf2f2/bc0c34?text=Lead+Generation",
      rating: "4.9",
      shortTitle: "Lead",
      whatYouWillLearn: [
        "Advanced techniques to find high-quality leads on demand.",
        "How to use Scrappy.io to automate prospect gathering.",
        "Crafting outreach messages that get replies.",
        "Building a sustainable lead pipeline for any business."
      ], 
      paymentLink: 'https://paystack.com/buy/lead-generation-using-scrappy-ywoarr'
    },
    // {
    //   slug: 'social-media-automation',
    //   title: "Social Media Automation Using Zoho Socials",
    //   description:
    //     "Post across all platforms at once, stay consistent without stress, and turn your social media into a daily sales machine. No more burnout. Let automation work for you.",
    //   image:
    //     "https://placehold.co/600x400/fdf2f2/bc0c34?text=Social+Media+Automation",
    //   rating: "4.7",
    //   shortTitle: "Social",
    //   whatYouWillLearn: [
    //     "How to schedule a month of content in a single afternoon.",
    //     "Using Zoho Social to analyze what's working and what's not.",
    //     "Engaging with your audience on autopilot.",
    //     "Turning your social profiles into a consistent source of sales."
    //   ]
    // },
  ];

  return {
    courses
  }
};
