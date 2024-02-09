import { defineField, defineType } from 'sanity'

// export default defineType({
//   name: "tagDetail",
//   title: "Tag Detail",
//   type: "document",
//   fields: [

//     defineField({
//       name: "tagname",
//       title: "Tag Name",
//       type: "string",
//       options: {
//         source: "tagname",
//         unique: true,
//         slugify: (input: any) => {
//           return input
//             .toLowerCase()
//             .replace(/\s+/g, "-")
//             .replace(/[^\w-]+/g, "");
//         },
//       },
//       validation: (Rule: any) =>
//         Rule.custom((fields: any) => {
//           if (
//             fields !== fields.toLowerCase() ||
//             fields.split(" ").includes("")
//           ) {
//             return "Tags must be lowercase and not be included space";
//           }
//           return true;
//         }),
//     }),
    
//     defineField({
//       name: "ogImage",
//       title: "Open Graph Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//     }),
    

//     defineField({
//       name: "title",
//       title: "Title",
//       type: "string",
//     }),


//     defineField({
//       name: "description",
//       title: "Description",
//       type: "text",
//     }),




//   ],

// })
