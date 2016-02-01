var virtues = [
  {
    name: "Temperance",
    description: "Eat not to dullness; drink not to elevation."
  },
  {
    name: "Silence",
    description: "Speak not but what may benefit others or yourself; avoid trifling conversation."
  },
  {
    name: "Order",
    description: "Let all your things have their places; let each part of your business have its time."
  },
  {
    name: "Resolution",
    description: "Resolve to perform what you ought; perform without fail what you resolve."
  },
  {
    name: "Frugality",
    description: "Make no expense but to do good to others or yourself; i.e., waste nothing."
  },
  {
    name: "Industry",
    description: "Lose no time; be always employ'd in something useful; cut off all unnecessary actions."
  },
  {
    name: "Sincerity",
    description: "Use no hurtful deceit; think innocently and justly, and, if you speak, speak accordingly."
  },
  {
    name: "Justice",
    description: "Wrong none by doing injuries, or omitting the benefits that are your duty."
  },
  {
    name: "Moderation",
    description: "Avoid extremes; forbear resenting injuries so much as you think they deserve."
  },
  {
    name: "Cleanliness",
    description: "Tolerate no uncleanliness in body, cloaths, or habitation."
  },
  {
    name: "Tranquility",
    description: "Be not disturbed at trifles, or at accidents common or unavoidable."
  },
  {
    name: "Chastity",
    description: "Rarely use venery but for health or offspring, never to dullness, weakness, or the injury of your own or another's peace or reputation."
  },
  {
    name: "Humility",
    description: "Imitate Jesus and Socrates."
  }
]



module.exports = {
    virtues: virtues,
    add: function(obj) {
      console.log('we add now', obj);
      return virtues.push(obj);
    },
    remove: function(i) {
      return virtues.splice(i, 1);
    }
  }
