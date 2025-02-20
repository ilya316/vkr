"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [compatibilityData, setCompatibilityData] = useState([
    {
      "culture_id": 1,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 7,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 3,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 1,
      "predecessor_culture_id": 1,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 1,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 2,
      "predecessor_culture_id": 2,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 7,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 8,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 1,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 3,
      "predecessor_culture_id": 3,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 1,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 12,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 11,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 4,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 4,
      "predecessor_culture_id": 13,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 7,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 1,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 5,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 5,
      "predecessor_culture_id": 6,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 7,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 1,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 6,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 6,
      "predecessor_culture_id": 5,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 3,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 5,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 6,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 1,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 7,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 7,
      "predecessor_culture_id": 10,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 1,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 10,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 9,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 8,
      "predecessor_culture_id": 8,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 1,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 4,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 5,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 6,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 13,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 2,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 8,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 10,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 9,
      "predecessor_culture_id": 9,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 4,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 13,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 1,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 5,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 6,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 12,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 11,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 8,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 9,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 10,
      "predecessor_culture_id": 10,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 1,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 12,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 4,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 13,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 11,
      "predecessor_culture_id": 11,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 1,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 4,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 13,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 12,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 12,
      "predecessor_culture_id": 11,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 5,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 6,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 8,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 2,
      "compatibility_quality": "хорошее"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 7,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 3,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 10,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 9,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 1,
      "compatibility_quality": "удовлетворительное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 4,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 13,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 12,
      "compatibility_quality": "нежелательное"
    },
    {
      "culture_id": 13,
      "predecessor_culture_id": 11,
      "compatibility_quality": "нежелательное"
    }
  ]);
  const [crops, setCrops] = useState([
    {
      "culture_id": 1,
      "culture_name": "Бобовые"
    },
    {
      "culture_id": 2,
      "culture_name": "Капуста"
    },
    {
      "culture_id": 3,
      "culture_name": "Свекла"
    },
    {
      "culture_id": 4,
      "culture_name": "Картофель"
    },
    {
      "culture_id": 5,
      "culture_name": "Лук"
    },
    {
      "culture_id": 6,
      "culture_name": "Чеснок"
    },
    {
      "culture_id": 7,
      "culture_name": "Морковь"
    },
    {
      "culture_id": 8,
      "culture_name": "Огурец"
    },
    {
      "culture_id": 9,
      "culture_name": "Тыква"
    },
    {
      "culture_id": 10,
      "culture_name": "Кабачок"
    },
    {
      "culture_id": 11,
      "culture_name": "Перец"
    },
    {
      "culture_id": 12,
      "culture_name": "Баклажан"
    },
    {
      "culture_id": 13,
      "culture_name": "Томат"
    }
  ]);
  const [matrix, setMatrix] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resPredecessor = await fetch('/json/predecessor.json');
  //       const dataPredecessor = await resPredecessor.json();
  //       console.log('Predecessors:', dataPredecessor);
  //       setCompatibilityData(dataPredecessor.predecessors);
    
  //       const resCulture = await fetch('/json/culture.json');
  //       const dataCulture = await resCulture.json();
  //       console.log('Crops:', dataCulture);
  //       setCrops(dataCulture.crops);
  //     } catch (error) {
  //       console.error('Ошибка загрузки данных:', error);
  //     }
  //   };
    
  //   fetchData();
  // }, []);

  const createCompatibilityMatrix = () => {
    const colors = {
      'хорошее':'green',
      'удовлетворительное':'orange',
      'нежелательное':'red',
      'неизвестно':'gray'
    }
    const matrix = {};

    crops.forEach(culture => {
      matrix[culture.culture_name] = {};
      crops.forEach(predecessor => {
        const compatibility = compatibilityData.find(
          item =>
            item.culture_id === culture.culture_id &&
            item.predecessor_culture_id === predecessor.culture_id
        );
        matrix[culture.culture_name][predecessor.culture_name] = compatibility
          ? colors[compatibility.compatibility_quality]
          : colors["неизвестно"];
      });
    });

    console.log(matrix)

    return matrix;
  };

  useEffect(() => {
    setMatrix(createCompatibilityMatrix());
  }, [crops, compatibilityData]);

  return (
    <div>
      <h1>Матрица совместимости культур</h1>
      {crops.length > 0 && compatibilityData.length > 0 ? (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>Культура</th>
              {crops.map(crop => (
                <th key={crop.culture_id}>{crop.culture_name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(matrix).map((culture, index) => (
              <tr key={index}>
                <td>{culture}</td>
                {crops.map((predecessor, pIndex) => (
                  <td style={{backgroundColor: `${matrix[culture][predecessor.culture_name]}`}} key={pIndex}>{}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}
