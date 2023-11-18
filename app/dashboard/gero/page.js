import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`query ExampleQuery {
    countries {
      code
      name
    }
  }`;



export default async function Page() {
  const { data }  = await getClient().query({ query });
  console.log("data : ", data);

  return <main>{data.countries[0].name}</main>;
}

// export default async function Page() {
//     try {
//       const response = await fetch("http://localhost:5000/graphql", {
//         method: "POST",
//         body: JSON.stringify({
//           query: `query Items {
//             items {
//               id
//               name
//               description
//               image
//               price
//               sponsorised
//               links
//             }
//           }`,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
  
//       return (
//         <main>
//           {data.items.map((item) => (
//             <div key={item.id}>
//               <h2>{item.name}</h2>
//               {/* Render other item properties */}
//             </div>
//           ))}
//         </main>
//       );
//     } catch (error) {
//       console.error("Failed to fetch: ", error);
//       return <main>Error loading data...</main>;
//     }
//   }
  