import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect, axios } from "react";

function SpecificCard() {
  const [card_id, setCardId] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // async function getCard() {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost:3006/api/user/getHalls"
    //     );
    //     setHalls(response.data);
    //   } catch (error) {
    //     console.error("Error fetching halls:", error);
    //   }
    // }
    // getCard();
  }, []);

  return (
    <>
      <h1>SpecificCard</h1>
      <p>Hall ID: {id}</p>
    </>
  );
}

export default SpecificCard;
