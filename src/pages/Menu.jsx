import PageSEO from "../components/shared/PageSEO";
import React, { useState } from "react";
import PageHero from "../components/shared/PageHero";
import CTASection from "../components/home/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1920&q=80&fit=crop";

const categories = [
  { key: "breads", label: "Artisan Breads" },
  { key: "cakes", label: "Cakes & Cupcakes" },
  { key: "pastries", label: "Pastries & Croissants" },
  { key: "cookies", label: "Cookies & Bars" },
  { key: "pies", label: "Pies & Tarts" },
  { key: "sweets", label: "Specialty Sweets" },
  { key: "custom", label: "Custom & Seasonal" },
  { key: "beverages", label: "Beverages" },
];

const menuItems = {
  breads: [
    { section: "Sourdough & Classic Loaves", items: [
      { name: "Sourdough Boule", desc: "Classic open-crumb sourdough with a crispy, golden crust" },
      { name: "Rustic Country Loaf", desc: "Hearty whole wheat and rye blend with a chewy interior" },
      { name: "Multigrain Sandwich Loaf", desc: "Seeded multigrain loaf perfect for sandwiches" },
      { name: "Classic White Sandwich Loaf", desc: "Soft, pillowy white bread, sliced to order" },
      { name: "Brioche Loaf", desc: "Rich, buttery brioche with a golden, tender crumb" },
      { name: "Cinnamon Raisin Loaf", desc: "Lightly spiced sweet loaf studded with plump raisins" },
      { name: "Honey Oat Loaf", desc: "Soft oat bread sweetened with local Tennessee honey" },
      { name: "Rosemary Sea Salt Loaf", desc: "Artisan loaf infused with fresh rosemary and flaky sea salt" },
    ]},
    { section: "Flatbreads & Rolls", items: [
      { name: "Focaccia — Rosemary & Sea Salt", desc: "Dimpled Italian flatbread with olive oil, rosemary, and sea salt" },
      { name: "Focaccia — Heirloom Tomato", desc: "Seasonal heirloom tomato focaccia with fresh herbs" },
      { name: "French Baguette", desc: "Classic crispy-crusted baguette, baked fresh daily" },
      { name: "Dinner Rolls (dozen)", desc: "Soft, pillowy dinner rolls brushed with butter" },
      { name: "Brioche Buns", desc: "Golden brioche buns — perfect for burgers or gifting" },
      { name: "Pretzel Rolls", desc: "Chewy Bavarian-style pretzel rolls with coarse salt" },
      { name: "Ciabatta", desc: "Italian open-crumb ciabatta with a light, airy texture" },
    ]},
  ],
  cakes: [
    { section: "Signature Layer Cakes", items: [
      { name: "Classic Vanilla Bean", desc: "Madagascar vanilla sponge with vanilla bean buttercream and berry compote" },
      { name: "Chocolate Fudge", desc: "Rich dark chocolate layers with whipped chocolate ganache frosting" },
      { name: "Lemon Raspberry", desc: "Bright lemon sponge layered with fresh raspberry jam and lemon curd" },
      { name: "Red Velvet", desc: "Velvety cocoa cake with tangy cream cheese frosting" },
      { name: "Carrot Cake", desc: "Spiced carrot cake with toasted walnuts and cream cheese frosting" },
      { name: "Strawberry Shortcake", desc: "Light vanilla sponge with fresh strawberries and whipped cream" },
      { name: "Salted Caramel", desc: "Brown butter cake with salted caramel filling and caramel buttercream" },
      { name: "Black Forest", desc: "Dark chocolate sponge with cherries, kirsch, and whipped cream" },
    ]},
    { section: "Cupcakes (per dozen)", items: [
      { name: "Vanilla Bean", desc: "Classic vanilla cupcake with swirled vanilla buttercream" },
      { name: "Double Chocolate", desc: "Rich chocolate cupcake with dark chocolate ganache frosting" },
      { name: "Lemon Blueberry", desc: "Bright lemon cupcake topped with blueberry compote buttercream" },
      { name: "Red Velvet", desc: "Red velvet cupcake with cream cheese frosting" },
      { name: "Funfetti", desc: "Celebration cupcake loaded with rainbow sprinkles" },
      { name: "Salted Caramel", desc: "Brown butter cupcake with salted caramel buttercream drizzle" },
      { name: "Strawberry", desc: "Fresh strawberry cupcake with strawberry cream frosting" },
      { name: "Custom Decorated", desc: "Your choice of flavor with fully custom decoration (please inquire)" },
    ]},
  ],
  pastries: [
    { section: "Croissants & Viennoiserie", items: [
      { name: "Butter Croissant", desc: "Classic laminated butter croissant — flaky, golden, and light" },
      { name: "Almond Croissant", desc: "Twice-baked croissant filled with almond frangipane and toasted almonds" },
      { name: "Chocolate Croissant (Pain au Chocolat)", desc: "Buttery croissant dough wrapped around premium dark chocolate batons" },
      { name: "Ham & Cheese Croissant", desc: "Savory croissant filled with Black Forest ham and Gruyère" },
      { name: "Strawberry Danish", desc: "Flaky pastry with cream cheese and fresh strawberry jam" },
      { name: "Cheese Danish", desc: "Classic cream cheese Danish with a buttery pastry base" },
      { name: "Morning Bun", desc: "Spiral pastry rolled in cinnamon sugar and orange zest" },
      { name: "Kouign-Amann", desc: "Caramelized Breton pastry — buttery, crispy, and irresistible" },
    ]},
    { section: "Sweet Pastries & Rolls", items: [
      { name: "Cinnamon Roll — Classic", desc: "Soft yeast roll swirled with cinnamon sugar and topped with cream cheese glaze" },
      { name: "Cinnamon Roll — Cardamom", desc: "Nordic-inspired cardamom-spiced roll with vanilla glaze" },
      { name: "Sticky Bun", desc: "Gooey pecan-caramel sticky bun baked upside down" },
      { name: "Apple Turnover", desc: "Flaky puff pastry filled with spiced Tennessee apple compote" },
      { name: "Blueberry Galette", desc: "Rustic free-form tart with fresh blueberries and lemon zest" },
      { name: "Muffins (assorted)", desc: "Blueberry, banana walnut, lemon poppy seed, or double chocolate" },
    ]},
  ],
  cookies: [
    { section: "Cookies (per dozen)", items: [
      { name: "Chocolate Chip", desc: "Our signature recipe — crispy edges, chewy center, premium chocolate chunks" },
      { name: "Double Chocolate", desc: "Fudgy dark cocoa cookie with dark chocolate chips" },
      { name: "Snickerdoodle", desc: "Soft cinnamon-sugar cookie with a crackly top" },
      { name: "Oatmeal Raisin", desc: "Chewy oat cookie with plump raisins and warm spices" },
      { name: "Peanut Butter", desc: "Classic fork-pressed peanut butter cookie — crispy and rich" },
      { name: "Shortbread", desc: "Buttery Scottish-style shortbread, plain or dipped in chocolate" },
      { name: "Lemon Poppy Seed", desc: "Bright, citrusy lemon cookie with a subtle poppy seed crunch" },
      { name: "Molasses Spice", desc: "Warm spiced molasses cookie with a crackled sugar crust" },
      { name: "Custom Decorated Sugar Cookies", desc: "Royal iced sugar cookies with fully custom designs for any occasion" },
    ]},
    { section: "Bars & Brownies", items: [
      { name: "Classic Brownie", desc: "Dense, fudgy dark chocolate brownie — crispy top, gooey center" },
      { name: "Blondie", desc: "Brown butter blondie with chocolate chips and sea salt" },
      { name: "Lemon Bar", desc: "Bright lemon curd on a buttery shortbread base, dusted with powdered sugar" },
      { name: "Raspberry Cheesecake Bar", desc: "Creamy cheesecake bar with a fresh raspberry swirl" },
      { name: "Caramel Pecan Bar", desc: "Buttery shortbread base with a rich caramel and toasted pecan topping" },
      { name: "Magic Bar (Seven Layer)", desc: "Layered coconut, chocolate, butterscotch, and nut bar on a graham base" },
    ]},
  ],
  pies: [
    { section: "Fruit Pies", items: [
      { name: "Classic Apple Pie", desc: "Tender Tennessee apples with cinnamon in an all-butter double crust" },
      { name: "Georgia Peach Pie", desc: "Juicy summer peaches in a flaky lattice crust" },
      { name: "Mixed Berry Pie", desc: "Blueberry, blackberry, and raspberry in a buttery fluted crust" },
      { name: "Cherry Pie", desc: "Tart Montmorency cherry filling under a golden lattice" },
      { name: "Pumpkin Pie (Seasonal)", desc: "Classic spiced pumpkin custard in a hand-rolled butter crust" },
      { name: "Blueberry Crumble Pie", desc: "Fresh blueberries under a crispy brown-butter oat crumble" },
    ]},
    { section: "Custard & Cream Pies", items: [
      { name: "Key Lime", desc: "Tart, creamy Key lime custard in a graham cracker crust" },
      { name: "Chocolate Silk", desc: "Ultra-smooth dark chocolate silk filling in a cookie crust" },
      { name: "Coconut Cream", desc: "Classic coconut pastry cream topped with toasted coconut flakes" },
      { name: "Banana Cream", desc: "Fresh banana slices in vanilla pastry cream with whipped topping" },
      { name: "Lemon Meringue", desc: "Tart lemon curd under a torched Italian meringue cloud" },
    ]},
    { section: "Savory Galettes", items: [
      { name: "Heirloom Tomato Galette", desc: "Rustic free-form tart with heirloom tomatoes, ricotta, and fresh basil" },
      { name: "Mushroom & Gruyère Galette", desc: "Earthy wild mushroom galette with Gruyère cheese and thyme" },
    ]},
  ],
  sweets: [
    { section: "Specialty Confections", items: [
      { name: "French Macarons (assorted)", desc: "Delicate almond meringue shells in seasonal flavors — vanilla, pistachio, rose, salted caramel, and more" },
      { name: "Éclairs", desc: "Choux pastry filled with vanilla or chocolate pastry cream and dipped in glaze" },
      { name: "Cream Puffs", desc: "Light choux puffs filled with Chantilly cream" },
      { name: "Madeleines", desc: "Classic French shell-shaped sponge cakes with lemon zest" },
      { name: "Cannoli", desc: "Crispy pastry shells filled with sweet ricotta cream and chocolate chips" },
      { name: "Tiramisu (individual)", desc: "Classic espresso-soaked ladyfinger dessert with mascarpone cream" },
      { name: "Panna Cotta", desc: "Silky vanilla bean panna cotta with seasonal berry coulis" },
      { name: "Chocolate Truffle Box", desc: "Assorted handmade chocolate truffles — dark, milk, and white varieties" },
    ]},
    { section: "Cheesecakes", items: [
      { name: "New York Classic", desc: "Dense, creamy New York-style cheesecake on a graham cracker crust" },
      { name: "Strawberry Swirl", desc: "Vanilla cheesecake with a fresh strawberry jam ribbon" },
      { name: "Oreo Cheesecake", desc: "Cookie crust cheesecake loaded with Oreo pieces" },
      { name: "Salted Caramel Cheesecake", desc: "Rich caramel-infused cheesecake with a salted caramel drizzle" },
      { name: "Lemon Ricotta Cheesecake", desc: "Light, whipped ricotta cheesecake with bright lemon zest" },
    ]},
  ],
  custom: [
    { section: "Custom Cakes & Special Orders", items: [
      { name: "Wedding Cakes", desc: "Multi-tiered wedding cakes in any flavor and design — consultation required" },
      { name: "Tiered Birthday Cakes", desc: "2–4 tier celebration cakes with custom themes, colors, and flavors" },
      { name: "Sculpted & Themed Cakes", desc: "Fully sculpted 3D cakes for any theme — please inquire for pricing" },
      { name: "Smash Cakes", desc: "Adorable single-serve smash cakes for baby's first birthday" },
      { name: "Cake Pops", desc: "Custom decorated cake pops — perfect for parties and gifts (sold by the dozen)" },
      { name: "Custom Cookie Boxes", desc: "Royal iced decorated sugar cookies in a gift box — fully custom designs" },
      { name: "Dessert Table Packages", desc: "Curated full dessert table with mixed items, styled for your event" },
    ]},
    { section: "Seasonal Specialties", items: [
      { name: "Pumpkin Spice Latte Cake (Fall)", desc: "Spiced pumpkin cake with espresso buttercream and caramel drizzle" },
      { name: "Peppermint Mocha Yule Log (Winter)", desc: "Classic bûche de Noël with peppermint-chocolate ganache filling" },
      { name: "Strawberry Basil Cake (Summer)", desc: "Light genoise with macerated strawberries and fresh basil cream" },
      { name: "Lavender Earl Grey Cake (Spring)", desc: "Delicate lavender sponge infused with Earl Grey and honey buttercream" },
      { name: "Cranberry Orange Tart (Holiday)", desc: "Tart cranberry curd with candied orange peel on a sweet pastry shell" },
    ]},
  ],
  beverages: [
    { section: "Hot Drinks", items: [
      { name: "Drip Coffee", desc: "House-blend freshly brewed drip coffee" },
      { name: "Espresso", desc: "Single or double shot of premium espresso" },
      { name: "Latte", desc: "Espresso with steamed whole milk — vanilla, caramel, or plain" },
      { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and dry foam" },
      { name: "Cortado", desc: "Equal parts espresso and warm milk" },
      { name: "Chai Latte", desc: "Spiced masala chai with steamed milk" },
      { name: "Hot Chocolate", desc: "Rich dark chocolate with steamed milk and whipped cream" },
      { name: "Matcha Latte", desc: "Ceremonial-grade matcha with oat or whole milk" },
    ]},
    { section: "Cold Drinks", items: [
      { name: "Cold Brew Coffee", desc: "12-hour cold brew concentrate over ice" },
      { name: "Iced Latte", desc: "Espresso over ice with your choice of milk" },
      { name: "Fresh-Squeezed Orange Juice", desc: "Made to order with fresh Florida oranges" },
      { name: "House Lemonade", desc: "Fresh-squeezed lemonade sweetened with cane sugar" },
      { name: "Sparkling Water", desc: "Still or sparkling, served chilled" },
    ]},
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("breads");

  const sections = menuItems[activeCategory];

  return (
    <div>
      <PageSEO
        title="Bakery Menu"
        description="Explore Royal Bakery Nashville's full menu — artisan breads, custom cakes, pastries, croissants, cookies, pies, macarons & more. Fully customizable for any occasion. Call (615) 603-1262."
        canonical="https://royalcateringnashville.com/menu"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Bakery Menu | Royal Bakery Nashville",
          "url": "https://royalcateringnashville.com/menu",
          "description": "Full bakery menu for custom cakes, artisan breads, pastries, and specialty sweets in Nashville, TN.",
          "isPartOf": { "@id": "https://royalcateringnashville.com/#website" }
        }}
      />
      <PageHero
        title="Our Menu"
        subtitle="Artisan Baked Goods — Nashville's Premier Custom Bakery"
        bgImage={HERO_BG}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <p className="text-center font-body text-sm text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
            All of our baked goods are made fresh to order using premium, locally sourced ingredients.
            Contact us to customize any item for your event, dietary needs, or occasion.
          </p>

          {/* Category Pills — desktop */}
          <div className="hidden sm:flex justify-center mb-14">
            <div className="flex flex-wrap justify-center gap-2 bg-[#0a1730] rounded-2xl p-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2 rounded-xl font-body text-xs tracking-wide uppercase transition-all duration-200 ${
                    activeCategory === cat.key
                      ? "bg-secondary text-[#0a1730] font-bold shadow-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: tab-filtered view */}
          <div className="hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-10">
                  {sections.map((section, si) => (
                    <div key={si}>
                      <h3 className="font-body text-[11px] uppercase tracking-[0.2em] text-secondary font-bold mb-5 pb-2 border-b border-border/50">
                        {section.section}
                      </h3>
                      <div className="grid grid-cols-2 gap-x-10 gap-y-0">
                        {section.items.map((item, i) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: i * 0.02 }}
                            className="py-3.5 border-b border-border/40 group hover:px-2 hover:rounded-lg hover:bg-muted/40 transition-all duration-200"
                          >
                            <h4 className="font-heading text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                              {item.name}
                            </h4>
                            <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: all categories shown sequentially */}
          <div className="sm:hidden space-y-12">
            {categories.map((cat) => (
              <div key={cat.key}>
                <h2 className="font-heading text-xl text-primary mb-6 pb-2 border-b-2 border-secondary/40">
                  {cat.label}
                </h2>
                {menuItems[cat.key].map((section, si) => (
                  <div key={si} className="mb-8">
                    <h3 className="font-body text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-4 pb-1.5 border-b border-border/50">
                      {section.section}
                    </h3>
                    <div className="space-y-0">
                      {section.items.map((item) => (
                        <div key={item.name} className="py-3 border-b border-border/30">
                          <h4 className="font-heading text-[15px] text-foreground leading-snug">{item.name}</h4>
                          <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 bg-primary rounded-2xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-heading text-2xl text-white mb-1">Need a Custom Order?</p>
              <p className="font-body text-sm text-white/60">
                We love creating bespoke baked goods tailored to your occasion.
              </p>
            </div>
            <a
              href="tel:6156031262"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-body text-sm font-semibold px-7 py-3 rounded-xl whitespace-nowrap transition-colors"
            >
              <Phone className="w-4 h-4" />
              (615) 603-1262
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
