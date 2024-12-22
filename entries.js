const entries = [
  { 
    prompt: "Share how your industry can prepare for an impending threat or opportunity", 
    category: "Informative", 
    example: "Not every product needs to embrace AI. But how do you compete with those that are? <br><br>By focussing on human strengths:<br><br>🤖 Not fobbing customers off with a bot when they need support<br>😮‍💨 UX that shows a deep understanding of your users' pain points<br>🦄 Design touches with a sense of whimsy<br><br>The stuff AI can't fake.", 
    media: "no" 
  },
  { 
    prompt: "Share a lesson from your first job that's stuck with you", 
    category: "Personal", 
    example: "My first job was as a waitress at a Chinese restaurant when I was 16. Two weeks in, I spilled red wine all over a customer's white denim jacket. She was the type of irate that no amount of profuse apologising would placate.<br><br>My already limited confidence was knocked completely, and to this day I always try to be gracious when someone makes a mistake, no matter how pissed off and drenched I am.<br><br>How did you mess up in your first job?", 
    media: "no"
  },
  { 
    prompt: "Share your preferred tool or stack for a particular workflow", 
    category: "Informative", 
    example: "An alternative 3 tool \"stack\" for running a meetup (easy and free):<br><br>🎟️ Tito for ticketing<br>🎨 BeFunky for simple marketing graphics<br>📧 MailerLite for updating members about upcoming dates<br><br>Keeps things simple, and saves funds for pizza.", 
    media: "yes"
  },
  { 
    prompt: "Post about something you've recently done or made outside of work", 
    category: "Personal", 
    example: "The Inktober prompts this year seem to be more themed than previous years, so to avoid doing loads of the same thing I tried to think lateral rather than literal. Here are 5 of the prompts. Can you guess which illustration was inspired by each?<br><br>Guidebook<br>Jumbo<br>Rhinoceros<br>Camp<br>Horizon", 
    media: "yes"
  },
  { 
    prompt: "Post about a recent achievement you're proud of", 
    category: "Personal", 
    example: "It took me 8 months, but I finally completed Harvard's CS50 Introduction to Computer Science! It's a really challenging course, but I've got so much out of doing it and I'm really proud of myself for seeing it through.", 
    media: "yes"
  },
  { 
    prompt: "Share a hack that's making your job easier", 
    category: "Informative", 
    example: "One genuinely helpful use for ChatGPT as a product manager:<br><br>1️⃣ Get it to help you write a Google Apps Script to automatically pull numerical data from your project management software (e.g. Linear) into a Google Sheet at the same time every week. This could be number of tasks at each stage, or by team member, or any other metric you want to track.<br><br>2️⃣ Wait at least a few weeks, then copy and paste the sheet data back into ChatGPT and prompt it to generate a narrative overview of your progress.<br><br>3️⃣ Easily spot bottlenecks, track areas of stagnation, and get a sense of your team's velocity and workflow trends, so you can adapt your approach as needed.",
    media: "no"
  },
  { 
    prompt: "Reflect on a piece of advice that has served you well", 
    category: "Inspiring", 
    example: "I used to argue with the same intensity for every opinion I had, until a former boss gave me this advice: unless you feel an 8/10 or stronger about this, it might be worth letting it go.<br><br>Sometimes arguing is more about ego than genuine conviction. Since then I've tried to save my energy for the things I feel most strongly about.<br><br>What advice did you get early in your career that still serves you today?",
    media: "no"
  },
  { 
    prompt: "Make a prediction about some aspect of your industry", 
    category: "Informative", 
    example: "What is AI bad at? These are the skills to hone to not get left behind:<br><br>🎨 Original creative thought and artistic intent<br>🔮 Big-picture and long-term thinking<br>🧩 Cross-domain transfer of knowledge<br>🟰 Disassembling systems of inequity",
    media: "no"
  },
  { 
    prompt: "Share a useful template or tool", 
    category: "Informative", 
    example: "If you've made a resolution to post more on LinkedIn but struggle with inspiration, I made a free tool to randomly generate 80+ prompts and examples — all written by a human (me), not AI. ",
    media: "yes"
  },
  { 
    prompt: "Re-share an evergreen piece of content from the archives", 
    category: "Informative", 
    example: "I just rediscovered this blog post I wrote in 2017 after a year of remote working, and it turned out I really needed a reminder on several points:<br><br>• Get ready as though you have somewhere to be<br>• Leave the house everyday<br>• Create a dedicated space to work<br>• Arrange opportunities to socialise<br><br>I've definitely let some of these slide in recent years. Read the full post: https://write.as/vicky/remote-working",
    media: "no"
  },
  { 
    prompt: "Comment on an industry trend you've observed", 
    category: "Informative", 
    example: "I'm increasingly seeing SaaS companies bundling products to mask rising costs by giving the impression of better value. But really it's just forcing users to pay for whole swathes of features they have zero need for. If it's a separate product, let me choose whether to pay for it!",
    media: "no"
  },
  { 
    prompt: "Talk about a piece of media you love (book, podcast, video, etc.) and why", 
    category: "Personal", 
    example: "I picked up \"Lost in a Good Game\" by <span style='color: #71b7fb';><strong>Pete Etchells</strong></span> on a whim to see whether my Stardew Valley obsession is rotting my brain. The good news is that it probably isn't. 🎉<br><br>But I got way more out of the book than I was expecting. It's surprisingly moving. And it's also a great exercise in critical analysis that felt like a much-needed blueprint for me as a post-graduate student. Finally, an impulse purchase that paid off.",
    media: "no"
  },
  { 
    prompt: "Share a funny or ironic anecdote", 
    category: "Personal", 
    example: "Years ago, my tweet got published in a book called \"Middle Class Problems\".<br><br>A fact I was reminded of as a caper exploded in my throat during lunch today.",
    media: "no"
  },
  { 
    prompt: "Share something that's inspiring you right now", 
    category: "Inspiring", 
    example: "Few things have been so inspiring to me lately as <span style='color: #71b7fb';><strong>Good Enough</strong></span> talking about the value of bad ideas. \"The dumber the better!\" they say.<br><br>It's definitely a liberating antidote to the default (and stifling) mindset that every idea needs to be winner.",
    media: "no"
  },
  { 
    prompt: "Ask your community for a recommendation", 
    category: "Engaging", 
    example: "I use Linear for task management but actual roadmap planning just happens in a Google Doc at the moment. Are there any tools you're using for this that you really rate?",
    media: "no"
  },
  { 
    prompt: "Get nostalgic about an element of your industry that's changed", 
    category: "Engaging", 
    example: "Lanyrd had its flaws, but its demise left a gap that no other platform has filled since. It was *the* place for speakers to showcase their appearances, attendees to find each other, and events on a shoe-string to benefit from some much needed free discovery.<br><br>Colloq tried to replace it but it never managed to take off and then the pandemic killed it completely.<br><br>Maybe the industry has changed too much in the last 10 years for a Lanyrd replacement to work these days, but its absence is a reminder of how much the right niche product at the right time can serve its community.",
    media: "no"
  },
  { 
    prompt: "Talk about something that's changed your mindset", 
    category: "Inspiring", 
    example: "I recently came across the idea that instead of moving through time like you're on a road, time flows through you like it's a river.<br><br>Instead of having somewhere to be and worrying about the time it takes to get there, you just experience each present moment as it comes to you.<br><br>I personally find this mindset shift comforting, but I can see how it might not appeal to people who value feeling a sense of agency. Where do you land?",
    media: "no"
  },
  { 
    prompt: "Post a checklist your audience might find useful", 
    category: "Informative", 
    example: "In a perfect world, all bugs get fixed immediately, but time is limited. Here's my triage guide as Head of Product to prioritise the most critical ones.<br><br>If causing a crash, data loss, or blocking critical tasks:<br>🚨 Yes with no workaround: Fix ASAP.<br>⚠️ Yes and workaround exists: Fix at next opportunity.<br><br>If not causing a crash, data loss, or blocking critical tasks:<br>🕑 Workaround exists: Treat as non-urgent.<br>🔜 No workaround and likely to affect others: Fix at next opportunity.<br>🤔 No workaround but unlikely to affect others: Treat as non-urgent.", 
    media: "yes"
  },
  { 
    prompt: "Share a quote and explain why it's meaningful to you", 
    category: "Personal", 
    example: "\"Time you enjoy wasting is not wasted time.\" — Marthe Troly-Curtin<br><br>A comforting reminder for anyone like me who gets lost down rabbit holes for days at a time at the expense of more \"productive\" tasks.",
    media: "no"
  },
  { 
    prompt: "Post a video of yourself talking about something job-related", 
    category: "Engaging", 
    example: "Highlights from mine and <span style='color: #71b7fb';><strong>Paul Campbell</strong></span>'s appearance on Smashing Meets Product Design panel last night.",
    media: "yes"
  },
  { 
    prompt: "Talk about a goal you're working towards", 
    category: "Personal", 
    example: "Since completing Harvard's CS50, I've been considering what challenge to take on next. Tito's built on Ruby, so I've decided to try the Full Stack Rails course from the Odin Project. Anyone else done it before?",
    media: "no"
  },
  { 
    prompt: "Discuss a habit that helps you at work", 
    category: "Inspiring", 
    example: "I've always called it \"eating your own dogfood\" but I've also heard it called drinking your own champagne, which I must admit sounds better. If you haven't heard either phrase, it means using your own product — and it's the single most helpful habit any software team can develop.<br><br>Nothing exposes rough edges quite like butting up against them yourself when you're in the middle of trying to get work done. Becoming your own customer is the quickest shortcut to developing empathy with the rest of your users.",
    media: "no"
  },
  { 
    prompt: "Write about something related to self-care or work-life balance", 
    category: "Inspiring", 
    example: "I once spent over £100 on a LoveFilm account I wasn't using, because I had a mental block on returning the final DVD.<br><br>It's ludicrous, but for some reason the longer you leave something, the harder it can be to do it. I spent so much of my younger years feeling bad for not responding to friends' texts — time I could have spent just replying to their message!<br><br>The change that's had the most positive impact on my mental health is trying to do things the day I think of them. Texting people back. Tidying my house as I go. Returning purchases before the 28 day period expires. It's definitely a better, and cheaper, way to live.",
    media: "no"
  },
  { 
    prompt: "Highlight an essential read for people in your industry", 
    category: "Inspiring", 
    example: "I credit \"Thinking in Systems\" by Donella Meadows with helping me develop a more strategic mindset. It clearly lays out how the elements of any system interact, so you can better understand how to effect change:<br><br>➜ Stocks are the elements you can measure<br>➜ Flows are the rates at which these stocks increase or decrease<br>➜ Leverage points are areas where small changes can produce big impacts<br>➜ Reinforcing loops amplify changes<br>➜ Balancing loops stabilise systems<br>➜ Delays between actions and outcomes destabilise systems<br>➜ Boundaries are how we understand the scope of the system<br>➜ Perspectives are how different people view the system<br><br>It's really a masterclass for anyone building a product or managing a team.",
    media: "no"
  },
  { 
    prompt: "Talk about something you never do (and why not)", 
    category: "Personal", 
    example: "Since having a kid, time has felt tighter than ever and I've slipped back into the habit of trying to multitask — but I'm increasigly remembering what a false economy it is in terms of my ability to focus.<br><br>So I'm hereby resolving to do one thing at a time and give it the attention it requires, and I'm interested to see whether this will make any difference to either the volume and quality of my output.<br><br>Anyone still swear by multitasking? And how do you make it work, if so?", 
    media: "no"
  },
  { 
    prompt: "Promote something you’re working on", 
    category: "Informative", 
    example: "I'm having a lot of fun flexing my new JS skills to turn some of my ideas into simple web apps. My first project was rankly, for ranking a list of up to 10 items. Try it and let me know what you think!", 
    media: "yes"
  },
  { 
    prompt: "Tell the story of how your brand, product or project got started", 
    category: "Inspiring", 
    example: "Around 11 years ago, I joined Tito as a customer.<br><br>I felt like a nuisance with my constant product feedback and feature suggestions, but instead of seeming annoyed, they hired me!<br><br>Now as Head of Product I work closely with other Tito customers and I see for myself just how valuable their feedback is.<br><br>Thanks to everyone who takes the time to let us know what you think and need — you're not a nuisance, you're a gem! 💎", 
    media: "no"
  },
  { 
    prompt: "Ask for content and creator recommendations", 
    category: "Engaging", 
    example: "I'm in the market for a good narrative podcast over multiple episodes that's not true crime. Any ideas?", 
    media: "no"
  },
  { 
    prompt: "Recommend one or more LinkedIn creators to follow", 
    category: "Engaging", 
    example: "The LinkedIn algorithm hit a home run when they recommended I follow <span style='color: #71b7fb';><strong>Hang 🤙 Xu</strong></span>. There isn't that much genuinely funny content on here, but roughly 82% of what there is comes from him.", 
    media: "no"
  },
  { 
    prompt: "Share a valuable resource for free", 
    category: "Informative", 
    example: "I’ve created a detailed template to help plan your virtual or hybrid event’s streaming schedule. It’s packed with everything your AV team needs, including:<br><br>➜ Clear live vs pre-recorded designations<br>➜ Overlay and graphic details<br>➜ Timings for each segment<br>➜ Presenter and speaker info<br>➜ Audience interaction notes<br>➜ AV requirements, technical cues, backup plans and more…<br><br>Grab it for free below, and enjoy a stress-free stream!", 
    media: "yes" 
  },
  { 
    prompt: "Poll your connections on a topic that interests you", 
    category: "Engaging", 
    example: "What influences your product decisions the most?<br><br>🤺 What your competitors are doing<br>🗣️ What your users are saying<br>📈 Trends in your industry<br>💡 Internal team ideas", 
    media: "yes"
  },
  { 
    prompt: "Share an insight you’ve gained recently", 
    category: "Personal", 
    example: "Whenever I think I have a solution to a problem, I've started asking myself \"what would the second best option be?\"<br><br>Forcing myself to consider alternatives prevents me from getting too attached to my initial idea, and helps me challenge assumptions, explore other possibilities, and boost my overall creative thinking. Have you ever tried doing this?", 
    media: "no"
  },
  { 
    prompt: "Announce an upcoming project (even if you don’t quite feel ready)", 
    category: "Inspiring", 
    example: "Product people: I'm working on a triage tool to help you prioritise your backlog. What functionality would you want to see?", 
    media: "no"
  },
  { 
    prompt: "Celebrate a recent success or milestone", 
    category: "Inspiring", 
    example: "This time 3 years ago, my first round of IVF had just failed. Today, my kid turns 2. 🥲", 
    media: "no"
  },
  { 
    prompt: "Post about an upcoming event you’ll be attending (or hosting)", 
    category: "Informative", 
    example: "I'm headed to International Confex next week with <span style='color: #71b7fb';><strong>Paul Campbell</strong></span> and <span style='color: #71b7fb';><strong>Doc Parsons</strong></span>. If you're around, come chat to us at the Tito stand!", 
    media: "no"
  },
  { 
    prompt: "Experiment with a carousel post (for example a slide deck)", 
    category: "Engaging", 
    example: "These are the 7 things that put potential attendees off attending your conference — and proven strategies to seriously boost your ticket sales with minimal effort.", 
    media: "yes"
  },
  { 
    prompt: "Try LinkedIn’s newsletter feature if you haven’t already", 
    category: "Informative", 
    example: "I just published the first issue of The Feature Creep, a brutally honest product management newsletter for software people.<br><br>This week's topics:<br><br> ➜ Identifying technical debt that needs fixing now vs later<br>➜ The 3 metrics your team probably isn't paying enough attention to<br>➜ Sunsetting features without pissing off your users", 
    media: "no"
  },
  { 
    prompt: "Share an image of yourself with an accompanying story", 
    category: "Personal", 
    example: "I took my driving test feeling completely unprepared despite having had a million lessons. When we got back to the test centre without even doing my manoeuvre, I was sure I'd already failed. Turns out the examiner was just waiting to ask me to reverse bay park. I managed to botch that too, taking me up to the maximum number of minors. But I passed! This photo was taken right after I stopped crying.<br><br>I haven't driven since. 😆", 
    media: "yes"
  },
  { 
    prompt: "Repurpose some content as a long-form article post", 
    category: "Informative", 
    example: "I won’t name and shame our previous project management software, but our CEO loathed it so much that he sometimes just wouldn’t even use it<span style='color: #a4a5a7';>…more</span>", 
    media: "yes"
  },
  { 
    prompt: "Share an article you’ve written or been quoted in", 
    category: "Informative", 
    example: "I pored over dozens of our customers' websites to identify the strategies they use to secure event sponsorships. Here are 8 of their best ideas<span style='color: #a4a5a7';>…more</span>", 
    media: "yes"
  },
  { 
    prompt: "Post a video interview with someone interesting to your audience", 
    category: "Engaging", 
    example: "Here's a throwback to my 2021 interview with founder, CEO and software developer <span style='color: #71b7fb';><strong>Nadia Odunayo</strong></span> about building The StoryGraph.<br><br>Initially a side-project built over a few days to simply track reading lists, it's evolved to capture rich, user-generated data such as content warnings, character profiles, and mood, to give hyper-personalised book recommendations and insights about your reading habits over time.<br><br>We chatted about balancing user requests with privacy concerns, overcoming perfectionism as a product developer, and of course book recommendations.<br><br>Hope you give it a watch!", 
    media: "yes"
  },
  { 
    prompt: "Talk about what you’ve got on this week or month", 
    category: "Personal", 
    example: "Me and the rest of the team have a fun-packed October planned:<br><br>➜ 7-10th in New York for Smashing Conf NYC<br>➜ 9th in London for Intercom's Pioneer event<br>➜ 24th in Edinburgh for HaggisRuby<br>➜ 28th in Brussels for Smashing Conf Antwerp<br><br>If you're around on any of these dates, let me know. We'd love to catch up!", 
    media: "no"
  },
  { 
    prompt: "Reflect on the previous week or month at work", 
    category: "Personal", 
    example: "We've been doing Calm December again at Tito this month:<br><br>➜ No meetings<br>➜ No deadlines<br>➜ No pressure to work a full day<br>➜ Work on what brings you joy<br><br>Unsurprisingly, I'm the most relaxed and inspired I've been in ages!", 
    media: "no"
  },
  { 
    prompt: "Meme or discuss a trending news story", 
    category: "Engaging", 
    example: "OK, but if TikTok does get banned, what will old people like me get to watch on Instagram Reels eight months later?", 
    media: "no"
  },
  { 
    prompt: "Share a cause or fundraiser that’s important to you", 
    category: "Inspiring", 
    example: "Do you know about the different types of homelessness?<br><br>➜ Rooflessness: sleeping rough<br>➜ Houselessness: temporary place to stay, like a shelter<br>➜ Insecure housing: couch surfing; threat of eviction or domestic violence<br>➜ Inadequate housing: caravans, illegal campsites, extreme overcrowding<br><br>My hometown of Brighton & Hove has seen a 27% increase in street homelessness this year, which charities like Knight Support are working to overcome. Please support them if you can: https://knightsupport.org.uk/", 
    media: "no"
  },
  { 
    prompt: "Promote your contact form or calendar link for people to get in touch", 
    category: "Engaging", 
    example: "I have some free time coming up in my calendar if you fancy chatting about:<br><br>➜ Streamlining your event registration process<br>➜ Improving the attendee experience during sign-up<br>➜ Strategies for maximising ticket sales<br>➜ Smarter data collection and analytics<br><br>Book a time here: https://calendly.com/vicky-tito/consultation", 
    media: "no"
  },
  { 
    prompt: "Share some feedback you've been given (anonymously or with permission)", 
    category: "Inspiring", 
    example: "One of the best compliments I ever received is that I have a “do it once, do it right” philosophy.<br><br>I like to think it sums up how I work — taking my time, paying attention to details, avoiding unnecessary repetition, and aiming for a result I can be proud of.<br><br>What's the best feedback you've ever received?", 
    media: "no"
  },
  { 
    prompt: "Talk about a long term ambition you have", 
    category: "Personal", 
    example: "One of my ancestors is Wikipedia-famous, and I have a long-held ambition to write a book about her and her fascinating nuclear family.<br><br>I've done hundreds of hours of research, but I never manage to get around to the actual writing. Maybe 2025 is the year?!", 
    media: "no"
  },
  { 
    prompt: "Highlight a business story that inspires you", 
    category: "Inspiring", 
    example: "I'm not a freelancer, so I've never had a need to use Cushion — but I've long admired their product approach from afar.<br><br>Founder Jonnie Hallman admits that their 2016 transition from a side project to a venture-backed startup led to a pressure to develop complex features that ultimately caused the product to stagnate. Now in 2024, he plans to rebuild the app with a modern tech stack, returning to its 2016 feature set when he felt Cushion was at its peak.<br><br>Working on a legacy product with a convoluted tech stack myself, I really appreciate what a brave move it is to take a step \"backwards\" to stay true to your vision and create the best possible user experience.", 
    media: "no"
  },
  { 
    prompt: "Talk about something you’re working to overcome", 
    category: "Personal", 
    example: "I know not everyone struggles with this, and I totally understand there are times when it’s necessary to soften your tone or acknowledge nuance, and I realise some might disagree with my perspective…<br><br>My biggest challenge at work is being confident in my voice without preempting others' reactions by starting with a dozen disclaimers and sub-clauses — but I'm working on just saying what I mean.<br><br>Anyone else a massive overthinker when it comes to speaking up or sharing opinions?", 
    media: "no"
  },
  { 
    prompt: "Clarify a myth or misconception about your industry", 
    category: "Informative", 
    example: "\"Attendees don’t care about the event platform as long as the content is good.\"<br><br>Yes and no.<br><br>Most don't really care about the specific features the software has, but they'll definitely let you know if the user experience is sub-par. Things like:<br><br>• Overly complex onboarding<br>• Confusing UI and clunky navigation<br>• Poor stream quality<br>• Limited device compatibility<br>• Technical glitches and crashes<br>• Lack of accessibility<br><br>When choosing an online or hybrid event platform, prioritising robustness over a lengthy list of features is the best route to attendee satisfaction.", 
    media: "no"
  },
  { 
    prompt: "Put together a pack of resources and share for free as a document", 
    category: "Informative", 
    example: "I’ve created a comprehensive playbook for anyone managing hybrid events on a tight budget. Inside, you'll find:<br><br>➜ Guide to Selecting the Right Virtual Platform<br>➜ Innovative Sponsorship Strategies for Online Events<br>➜ 10 Proven Schedule Templates for Maximum Engagement<br>➜ The Definitive Streaming & AV Toolkit<br>➜ Video Editing Essentials for Professional Results<br><br>I hope you find them useful!", 
    media: "yes"
  },
  { 
    prompt: "Share an \"unpopular opinion\" or advice that goes against the grain", 
    category: "Engaging", 
    example: "Sometimes, user feedback hurts more than it helps. Hear me out!<br><br>Of course listening to your users is crucial to refine and validate your product, but the most groundbreaking ideas come from visionaries following their instincts early on. Users tend to express their needs based on existing paradigms, so being too reactive at the foundational stage can stifle innovation.<br><br>It sounds risky, but people didn't know they needed an iPhone or Airbnb until founders with a strong vision showed them they did!", 
    media: "no"
  },
  { 
    prompt: "Shout out somewhere great that's local to you", 
    category: "Personal", 
    example: "If you're looking for an idea for a work team-building outing in Brighton, VRROOM virtual racing room at the Marina is a lot of fun. I didn't think it'd be my thing at all (and sure, I was the second slowest driver all week), but I had a great time nonetheless!", 
    media: "no"
  },
  { 
    prompt: "Use the \"celebrate occasion\" feature to mark a milestone", 
    category: "Inspiring", 
    example: "Today marks 7 years at Tito, and I'm not at all itchy! 😄", 
    media: "yes"
  },
  { 
    prompt: "Summarise your latest blog post in a video", 
    category: "Informative", 
    example: "Even as I write help articles for our apps, I hope most users won’t need to read them. I've always viewed documentation is a last resort, but a recent Figma experience has made me have second thoughts…", 
    media: "yes"
  },
  { 
    prompt: "Repurpose a recent blog post into a slide deck or infographic", 
    category: "Informative", 
    example: "I created an illustrated guide with my favourite self-care tips for event managers (that aren't just \"take a bath\").", 
    media: "yes"
  },
  { 
    prompt: "Share a clip from a video you’ve created or feature in", 
    category: "Engaging", 
    example: "A few highlights from my chat with Mpz board member <span style='color: #71b7fb';><strong>Asia Orangio</strong></span> covering everything from morning routines to learning any instrument to tarot readings and more…", 
    media: "yes"
  },
  // { 
  //   prompt: "Repost something you’ve previously shared on another social network", 
  //   category: "Engaging", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Post the background or behind the scenes of a piece of content you created", 
  //   category: "Personal", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Talk about a difficult conversation you had at work (without naming names)", 
  //   category: "Personal", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Comment on a statistic from your industry", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Promote a job opportunity (or help boost someone else’s)", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Share some press featuring you or your company", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "yes"
  // },
  // { 
  //   prompt: "Post a video of your setup or workspace", 
  //   category: "Personal", 
  //   example: "", 
  //   media: "yes"
  // },
  // { 
  //   prompt: "Shout out someone you think is great at their job (tag them)", 
  //   category: "Engaging", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Talk about a value you hold that guides you in work or life", 
  //   category: "Inspiring", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Share a round-up of recent content you’ve found useful", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Chime in on a discussion you’ve seen happening on LinkedIn", 
  //   category: "Engaging", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Share a success story from a customer (with their permission)", 
  //   category: "Inspiring", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Experiment with sharing a 3-part post over 3 days", 
  //   category: "Engaging", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Repost someone’s post with your own comment that adds value", 
  //   category: "Engaging", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Share a \"Top 5\" (or more) list, relevant to your industry", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Share a picture or screenshot of something you’re working on", 
  //   category: "Personal", 
  //   example: "", 
  //   media: "yes"
  // },
  // { 
  //   prompt: "Answer a question you get asked a lot", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Tie a post into an upcoming holiday or international day", 
  //   category: "Engaging", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Talk about a mistake you made and what you learned", 
  //   category: "Personal", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Ask your community an open ended question", 
  //   category: "Engaging", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Talk about your route into your current job", 
  //   category: "Personal", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Post a then vs now image (of you, your website, product, etc.)", 
  //   category: "Inspiring", 
  //   example: "", 
  //   media: "yes"
  // },
  // { 
  //   prompt: "Turn one of your processes into a guide and share as a visual or list", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "yes"
  // },
  // { 
  //   prompt: "Review something relevant to your industry (a tool, podcast, article etc.)", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Promote a colleague or connection’s work", 
  //   category: "Inspiring", 
  //   example: "", 
  //   media: "no"
  // },
  // { 
  //   prompt: "Post a screen share walking through how to do something", 
  //   category: "Informative", 
  //   example: "", 
  //   media: "yes"
  // },
];

export default entries;