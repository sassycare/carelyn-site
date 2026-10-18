// Every piece of wording on the website that can be changed from the admin page ("Site text" tab).
// The text shown here is the starting wording. Changes made in the admin are saved in artworks.json
// and win over this list; clearing a change in the admin puts the wording back to what is below.
// Words in { } are filled in automatically, e.g. {shipsTo} becomes "Australia-wide".
(function(){
  const S = Object.assign({}, window.SITE || {});
  const L = [];
  const add = (section, k, label, def, o) => L.push(Object.assign({section: section, k: k, label: label, def: def}, o || {}));

  const A = "Top of the page";
  add(A, "pageTitle", "Browser tab title", "Carelyn Madaschi | Original paintings and prints");
  add(A, "navWork", "Menu: Work", "Work");
  add(A, "navAvail", "Menu: Available", "Available");
  add(A, "navAbout", "Menu: About", "About");
  add(A, "navCommissions", "Menu: Commissions", "Commissions");
  add(A, "artistName", "Your name (menu bar, big heading and footer)", () => S.artistName || "");
  add(A, "theme", "Line under your name", "Quiet moments, vivid colour.");
  add(A, "tagline", "Short description", () => S.tagline || "", {multi: true});
  add(A, "bannerNote", "Sentence under the cover banner", "Children and families, seen from behind, looking out at the sea, the rain and the moon. Come and sit beside them.", {multi: true});
  add(A, "bannerLink", "Link under the cover banner", "View all work");

  const B = "What people recognise in your work";
  add(B, "sigKicker", "Small heading", "What you'll recognise in my work");
  add(B, "sig1Title", "First idea: title", "Layered texture");
  add(B, "sig1Text", "First idea: text", "Thick acrylic built up in layers, often with a palette knife, so the surface catches the light.", {multi: true});
  add(B, "sig2Title", "Second idea: title", "The colour of in-between hours");
  add(B, "sig2Text", "Second idea: text", "Saturated purples, pinks and blues warmed with gold: dusk, mist, rain and first light.", {multi: true});
  add(B, "sig3Title", "Third idea: title", "A shared viewpoint");
  add(B, "sig3Text", "Third idea: text", "Figures are often seen from behind, looking out, so you stand beside them and share the view.", {multi: true});

  const C = "The Work section";
  add(C, "workHeading", "Heading", "Work");
  add(C, "tabAll", "Tab: all paintings", "All work");
  add(C, "tabAvail", "Tab: available originals", "Available originals");
  add(C, "availIntro", "Sentence above the available originals", "{n} originals ready for a new home, in group order. Open a painting for its size and framing, or to enquire.", {multi: true, hint: "{n} becomes the number of paintings available."});
  add(C, "filterAll", "Filter button: everything", "All");
  add(C, "filterAvailable", "Filter button: available", "Available");
  add(C, "filterPrints", "Filter button: prints", "Prints");
  add(C, "emptyFilter", "Message when no painting matches", "Nothing matches right now. Choose \"All\" or ask about a commission.", {multi: true});

  const G = "Group names and descriptions";
  (window.THEMES || []).forEach(t => {
    add(G, "group_" + t.id + "_label", "Group name: " + t.label, t.label);
    add(G, "group_" + t.id + "_blurb", "Description of " + t.label, t.blurb || "", {multi: true});
  });

  const D = "About";
  add(D, "aboutHeading", "Heading", "About");
  add(D, "bio", "Your story", () => (S.bio || []).join("\n\n"), {multi: true, tall: true, hint: "Leave a blank line between paragraphs."});

  const E = "Commissions and information";
  add(E, "cmHeading", "Heading", "Commissions and prints");
  add(E, "cmText", "Paragraph", "A painting of a place you love, your family, or colours to suit a particular room. Send a note with what you have in mind and the size you're after, and I'll reply with a quote and timeline. If an original has sold, a print is often available, and I'm happy to talk about custom print sizes.", {multi: true, tall: true});
  add(E, "cmButton", "Button", "Email about a commission");
  add(E, "payHeading", "Payment: heading", "Payment");
  add(E, "payText", "Payment: text", "Checkout is handled by Stripe, so you can pay by card, Apple Pay or Google Pay.", {multi: true});
  add(E, "delHeading", "Delivery: heading", "Delivery");
  add(E, "delText", "Delivery: text", "Originals and prints are carefully packed and posted {shipsTo}. Local pickup from {location} is welcome.", {multi: true, hint: "{shipsTo} and {location} are filled in from the boxes in the next section."});
  add(E, "quesHeading", "Questions: heading", "Questions");
  add(E, "quesText", "Questions: text", "Not sure about a size or how a piece will look in your room?", {multi: true});
  add(E, "quesLink", "Questions: email link", "Send me an email");

  const F = "Footer and contact details";
  add(F, "location", "Where you are", () => S.location || "");
  add(F, "shipsTo", "Where you post to", () => S.shipsTo || "", {hint: "Used in sentences such as \"posted Australia-wide\"."});
  add(F, "email", "Email address", () => S.email || "", {hint: "Every email button and link on the website uses this address."});
  add(F, "instagram", "Instagram name (without the @)", () => S.instagram || "");
  add(F, "igText", "Instagram link wording", "@{instagram}");
  add(F, "mailText", "Email link wording", "Email");
  add(F, "footerCopy", "Footer line", "© {year} {artistName}. {location}.", {hint: "{year} is always the current year."});

  const H = "Painting pop-up and cards";
  add(H, "lblMedium", "Label: medium", "Medium");
  add(H, "lblSize", "Label: size", "Size");
  add(H, "lblPainted", "Label: painted", "Painted");
  add(H, "lblFraming", "Label: framing", "Framing");
  add(H, "lblGroup", "Label: group", "Group");
  add(H, "lblOriginal", "Label: original", "Original");
  add(H, "lblPrint", "Label: print", "Print");
  add(H, "lblPrintsHeading", "Heading above the print sizes", "Prints");
  add(H, "notePrints", "Note beside the print sizes", "Postage is added at checkout.");
  add(H, "btnBuy", "Button: buy a print size", "Buy");
  add(H, "btnAskSize", "Button: ask about a print size (when it has no payment link yet)", "Ask");
  add(H, "lblSold", "Word for sold", "Sold");
  add(H, "lblPriceOnRequest", "Words when there is no price", "Price on request");
  add(H, "btnBuyOriginal", "Button: buy the original", "Buy the original");
  add(H, "btnAskOriginal", "Button: ask about the original", "Ask about the original");
  add(H, "btnEnquire", "Button: enquire", "Enquire about this painting");
  add(H, "btnSimilar", "Button: similar commission (sold paintings)", "Ask about a similar commission");
  add(H, "btnBuyPrint", "Button: buy a print", "Buy a print");
  add(H, "btnAskPrint", "Button: ask about prints", "Ask about prints");
  add(H, "noteStripe", "Note: secure checkout", "Secure checkout by Stripe.");
  add(H, "noteShips", "Note: shipping", "Ships {shipsTo}.");
  add(H, "noteAsk", "Note: question link", "Ask a question");
  add(H, "cardSold", "On the cards: sold original", "Original sold");
  add(H, "cardPrints", "On the cards: prints", "Prints");
  add(H, "cardAvailable", "On the cards: available", "Available");

  window.TEXTS = L;
})();
