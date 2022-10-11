const {Shop, Item} = require("../src/gilded_rose");
const makeFixtureShop = () => {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Aged Brie", 7, 46),
    new Item("Aged Brie", 2, 0),
    new Item("Elixir of the Mongoose", 5, 7),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 9, 52),
    new Item("Backstage passes to a TAFKAL80ETC concert", 9, 45),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 43),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45),
    new Item("Conjured Mana Cake", 5, 18),
    new Item("Conjured Mana Cake", 3, 6),
    new Item("Conjured Mana Cake",-1, 6),
  ];

  return new Shop(items);
}

describe("Gilded Rose", () => {
  it("should make Fixture", () => {
    const actual = [];
    const days = 9;
    const shop = makeFixtureShop();

    for (let day = 0; day < days; day++) {
      actual.push(JSON.parse(JSON.stringify(shop.items)));
      shop.updateQuality();
    }
    expect(actual).toMatchSnapshot();
  });
});
