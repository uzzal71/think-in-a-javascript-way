/**
 * Scope is 4 types
 * +++++++++++++++++++++++++++++++++
 * Global Scope: Hotel Represents
 * Local Scope or Function Scope: Hotel Room
 * Block Scope: swimming pool
 * Module Scope
 */

// Block Scope
{
  x = 10
}
console.log(x) // 10

if (true) {
  let y = 20
  console.log(y) // 20
}

for(i = 18; i < 20; i++) {
  console.log(i)
}