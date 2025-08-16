Create
a
modern, two - page
website
for a project called "Tell Me Everything".
\
Page 1: Landing Page
\
This will be a single, scrollable page
with a dark
theme, using
the
components
specified
below.
\
1. Hero Section:
\
Use the spiral-animation.tsx component as the full-screen, fixed background
for the entire hero section.
\
On top of the animation, center the following content:

Main Title: "Tell Me Everything" in a large, bold, white font.

Subtitle: "Instantly summarize your chats and documents. Save time, stay informed." in a smaller, elegant white font below the title.

Primary Button: A prominent button labeled "Explore Features". This button should smoothly scroll the user down to the "Features" section.

Next to the main title "Tell Me Everything", add a small, subtle icon button (like a chat bubble icon). This button must navigate to /chat, which is the second page.

2. Features Section (About Us / Project Explanation):
\
Use the container-scroll-animation.tsx component
for this section.
\
The
titleComponent
should
contain:
\
An h1
with the text:
"Tired of Information Overload? <br /> <span class='text-4xl md:text-

6rem\
 font-bold mt-1 leading-none'>Let AI Handle It</span>".
\
For the scrolling card content (children), use an Image component
with the src
set
to
https: //i.postimg.cc/RVKmmfTm/How-to-Use-Whats-App-Web-The-Ultimate-Guide.jpg.
\
Below this scroll animation component, add a section
with a dark
background
that
lists
the
key
features.Each
feature
should
be in its
own
card
with an icon
and
should
animate
into
view
with a staggered
fade-in effect as the
user
scrolls
down.
\
"WhatsApp Chat Summarization"

"Document Analysis"

"AI-Powered Safety Checks"

"Time Efficiency"

3. Testimonials Section:

Use the testimonials-columns-1.tsx component.

The title should be "What our users say".
\
Crucially, replace the default testimonial text
with content relevant
to
our
app.Use
the
following
testimonials: text: '\'Tell Me Everything\' is a lifesaver! I caught up on a week\'s worth of group chat messages in two minutes. Absolutely essential.", name: "Alex Johnson", role: "Project Manager'

text: 'I was hesitant to open a PDF sent in a group chat, but the safety check feature gave me peace of mind. The summary was a bonus!", name: "Sarah Lee", role: "Freelance Designer'

text: 'The ability to get instant summaries and smart reply suggestions without leaving the app is a game-changer for my productivity.", name: "David Chen", role: "Startup Founder'
\
(You can use the other default testimonials to fill the remaining slots).

4. Footer Section:

Use the footer-taped-design.tsx component.

Change the brand name from "ActivationLed" to "Tell Me Everything".

Update the description to: "An AI-powered chatbot designed to analyze and summarize your documents and chat logs efficiently."

Simplify the links under "Resources" to just "Features" and "Testimonials", which should scroll to the respective sections on the page. Remove the other link columns.

Page 2: Chat UI (/chat)

This page should have a clean, minimalist layout on a dark background.

1. Initial View:

In the center of the screen, display a file upload component. It should be a dashed-border box that says "Drag and drop your file here, or click to upload."

Below the box, list the supported file types: ".txt, .pdf".

2. After File Upload View:

Once a file is uploaded, hide the upload box.

In the chat area, display a message like: "File uploaded: [filename]. What would you like to do?"

Immediately below this message, display four distinct buttons:

Summarize
\
Check
for Safety
\
Suggest WhatsApp
Replies
\
Other...

Also, display a text input field at the bottom of the screen, but it should be disabled initially.

3. Interaction Logic:
\
If the user clicks Summarize, Check
for Safety, or Suggest WhatsApp Replies, show
a
loading
indicator
and
then
display
a
simulated
AI
response in the
chat
window.If
the
user
clicks
Other
..., the four buttons should disappear, and the text input field at the bottom should become active, allowing the user to
type a custom
question.NPM
Dependencies
to
Install: gsap

framer - motion

motion

next

lucide - react

Global
CSS / Tailwind
Configuration: Use
the
provided
theme
variables
for colors (--color-primary, --color-base-100, etc.) and fonts (--font-display, --font-sans). Ensure the
overall
theme
is
dark
and
modern.
