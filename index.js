const str = '<div class="content">This is the content</div>';
const regex = /<div\s+class="content">[\s\S]*?<\/div>/g;
const match = str.match(regex);
console.log(match[0]);
