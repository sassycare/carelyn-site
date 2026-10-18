// Site-wide settings. Paintings are managed from admin.html, not here.
window.SITE = {
  artistName: "Carelyn Madaschi",
  tagline: "Original acrylic paintings, prints and commissions from Bowral, NSW.",
  location: "Bowral, NSW",
  email: "sassycare.art@gmail.com",
  instagram: "sassycare_art",
  currency: "AUD",
  shipsTo: "Australia-wide",
  bio: [
    "Carelyn Madaschi is an emerging contemporary artist based in Bowral, New South Wales whose work spans bold portraits, abstract landscapes, emotionally resonant self-reflections, and whimsical playfulness. With a background in economics and accounting, painting became her therapeutic conduit—a space where colour, form, and raw emotion merge.",
    "Across subjects and styles, Carelyn’s work is unified by layered acrylic textures, expressive brushwork, and vibrant palettes. She invites collectors into a world shaped by introspection, energy, healing, and delight—where every piece reflects a moment, feeling, or idea made visible.",
    "Every original is signed and ready to hang, and many are also available as prints."
  ]
};

// Themes shown as filters on the site and in the admin dropdown.
window.THEMES = [
  { id: "signature", label: "Signature Style", blurb: "Children and families seen from behind, looking out at the sea, the rain and the moon." },
  { id: "florals", label: "Florals", blurb: "Flowers built up in thick, layered palette-knife colour." },
  { id: "skylines", label: "Skylines", blurb: "Cities at dusk, doubled in water, rain and glass." },
  { id: "landscapes", label: "Landscapes", blurb: "Roads, forests and shorelines: the journey, and the way home." },
  { id: "abstracts", label: "Abstracts", blurb: "Colour and texture carry the feeling." },
  { id: "movies", label: "Movies", blurb: "Scenes from the films I love, painted my way." },
  { id: "others", label: "Others", blurb: "Portraits, still life and everything in between." }
];

// Where the admin page saves changes. Fill these in once (see the setup guide).
window.ADMIN = {
  owner: "sassycare",              // the GitHub account that owns the website
  repo: "carelyn-site",            // the repository name
  branch: "main"
};

