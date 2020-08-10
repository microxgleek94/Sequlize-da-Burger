module.exports = function (sequelize, DataTypes) {
  // "createdAt" and "updatedAt" in our Burger table 
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        // to make sure the user has at least 1 character when entering a burger
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        // to make sure the user has at least 1 character when entering a burger
        len: [1]
      }
    },
  }, 
  {  // "timestamps: false" is used to disable the automatically added the columns 
    timestamps: false
  }

  );
  return Burger;
}
