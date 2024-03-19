// higher order functions
/// ফাংশনাল প্রোগ্রামিং হলো যেখানে আপনি এক বা একাধিক ফাংশনকে প্যারামিটার হিসেবে আর একটা ফাংশনে পাঠাতে পারবেন
// একটা ফাংশন থেকে আর একটা ফাংশন রিটার্ন করা যায়।
function hello() {
  console.log("Hello World!");
}

hello();

hello.language = "JavaScript";
console.log(hello.language);
