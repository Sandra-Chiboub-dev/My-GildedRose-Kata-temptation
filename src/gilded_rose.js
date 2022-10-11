class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
const MAX_QUALITY_VALUE = 50;
const itemNames = {
  AGED: 'Aged Brie',
  BACK: 'Backstage passes to a TAFKAL80ETC concert',
  CONJ: 'Conjured Mana Cake',
  SULF: 'Sulfuras, Hand of Ragnaros'
};

function updateAged(item) {
  if (item.quality < MAX_QUALITY_VALUE) {
    item.quality = item.quality + 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality < MAX_QUALITY_VALUE) {
    item.quality = item.quality + 1;
  }
}

function updateBack(item) {
  if (item.quality < MAX_QUALITY_VALUE) {
    item.quality = item.quality + 1;
    if (item.sellIn < 11 && item.quality < MAX_QUALITY_VALUE) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 6 && item.quality < MAX_QUALITY_VALUE) {
      item.quality = item.quality + 1;
    }
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }
  if (item.sellIn <= 10) {
    item.quality = item.quality + 2;
  }
  if (item.sellIn <= 5) {
    item.quality = item.quality + 3;
  }
}

function updateConj(item) {
  item.sellIn = item.sellIn - 1;
  item.quality = item.quality - 2;
  if (item.sellIn < 0) {
    item.quality = item.quality - 2;
  }
}

function updateSulf(item) {
}

function updateStandard(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

class Shop {
// fix-istanbul-decorators.js
/* istanbul ignore next */
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (const item of this.items) {
      switch(item.name) {
        case itemNames.AGED:
          updateAged(item);
          continue;
        case itemNames.BACK:
          updateBack(item);
          continue;
        case itemNames.CONJ:
          updateConj(item);
          continue;
        case itemNames.SULF:
          updateSulf(item);
          continue;
        default:
          updateStandard(item);
          continue;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
