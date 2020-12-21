
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {fname: 'John', lname: 'Doe', username: 'Johndoe', password: "johndoepassword"},
        {fname: 'Aaron', lname: 'Anderson', username: 'AronA', password: "aaronpassword"},
        {fname: 'Bob', lname: 'Barker', username: 'Bobay', password: "bobspassword"},
        {fname: 'Carl', lname: 'Carter', username: 'Carlsjr', password: "carlspassword"},
        {fname: 'Darren', lname: 'Doe', username: 'Darius', password: "darrenspassword"},
        {fname: 'Elizabeth', lname: 'Einstein', username: 'Elizab', password: "eequalsmcsquared"},
      ]);
    });
};
