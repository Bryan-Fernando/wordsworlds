import React from "react";

import styles from "./pagina64.module.css";

import eng_audio_icon from "../assets/icons/eng_audio_icon.webp";
import ptbr_audio_icon from "../assets/icons/ptbr_audio_icon.webp";

import imagemUnica from "../assets/images/pagina64_imagem1.webp"; 
import segundaImagem from "../assets/images/pagina64_imagem2.webp"; 
import terceiraImagem from "../assets/images/pagina64_imagem3.webp";  
import quartaImagem from "../assets/images/pagina64_imagem4.webp";  
import quintaImagem from "../assets/images/pagina64_imagem5.webp";  
import sextaImagem from "../assets/images/pagina64_imagem6.webp"; 
import setimaImagem from "../assets/images/pagina64_imagem7.webp";

import pg64_audio1e from "../assets/audios/pg64_audio1e.mp3";
import pg64_audio1p from "../assets/audios/pg64_audio1p.mp3";
import pg64_audio2 from "../assets/audios/pg64_audio2.mp3";
import pg64_audio3 from "../assets/audios/pg64_audio3.mp3";
import pg64_audio4 from "../assets/audios/pg64_audio4.mp3";
import pg64_audio5 from "../assets/audios/pg64_audio5.mp3";

const Pagina64 = () => {

  const audioMap = {
    pg64_audio1e: pg64_audio1e,
    pg64_audio1p: pg64_audio1p,
    pg64_audio2: pg64_audio2,
    pg64_audio3: pg64_audio3,
    pg64_audio4: pg64_audio4,
    pg64_audio5: pg64_audio5,
  };


  const playAudio = (audioKey) => {
    const audioSrc = audioMap[audioKey];
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      console.warn(`Áudio não encontrado para a chave: ${audioKey}`);
    }
  };



  return (
    <div className={styles["page64__container"]}>
      <header className={styles["page64__header"]}>
        <h1 className={styles["page64__title"]}>
          Reading and Comprehension
          <img
            src={eng_audio_icon}
            alt="English audio"
            className={styles["page64__audio-icon"]}
            onClick={() => playAudio('pg64_audio1e')}
          />
          <img
            src={ptbr_audio_icon}
            alt="Portuguese audio"
            className={styles["page64__audio-icon"]}
            onClick={() => playAudio('pg64_audio1p')}
          />
        </h1>
      </header>

      {/* Imagem única - Preenche toda a página */}
      <div className={styles["page64__background-container"]}>
        <img
          src={imagemUnica}
          alt="Background"
          className={styles["page64__background-image"]}
        />
      </div>

      {/* Imagens adicionais separadas com moldura */}
      <div className={styles["page64__main"]}>

        {/* Imagem 2 */}
        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--my-family"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={segundaImagem}
              alt="Imagem 2"
              className={styles["page64__image"]}
            />
          </div>
          <div
            className={`${styles["page64__text-box"]} ${styles["page64__text--my-family"]}`}
          >
            <p onClick={() => playAudio("pg64_audio2")} style={{ cursor: "pointer" }}>
              <strong>My Family.</strong> <br /> Hi! I'm Indira Alves França. I'm an educator/pedagogue.
              I am from Paraty – Brazil. I'm Brazilian. I'm 37 years old.
            </p>
          </div>
        </div>

        {/* Imagem 3 */}
        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--married"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={terceiraImagem}
              alt="Imagem 3"
              className={styles["page64__image"]}
            />
          </div>
          <div
            className={`${styles["page64__text-box"]} ${styles["page64__text--married"]}`}
          >
            <p onClick={() => playAudio("pg64_audio3")} style={{ cursor: "pointer" }}>
              I am married to Sergio França. He is a journalist. He is also Brazilian,
              from Paraty. He is 39 years old. We are a married couple.
            </p>
          </div>
        </div>

        {/* Imagem 4 - Children */}
        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--children"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={quartaImagem}
              alt="Imagem 4"
              className={styles["page64__image"]}
            />
          </div>
          {/* Envolvendo o texto com um wrapper separado */}
          <div className={styles["page64__text-wrapper"]}>
            <div
              className={`${styles["page64__text-box"]} ${styles["page64__text--children"]}`}
            >
              <p onClick={() => playAudio("pg64_audio4")} style={{ cursor: "pointer" }}>
                We have two children. Our son, Eduardo is 10 (ten) years old. Our daughter,
                Alice is 9 (nine) years old. They're both in elementary school.
              </p>
            </div>
          </div>
        </div>

        {/* Imagem 5 - Sister */}
        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--sister"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={quintaImagem}
              alt="Imagem 5"
              className={styles["page64__image"]}
            />
          </div>
          {/* Envolvendo o texto com um wrapper separado */}
          <div className={styles["page64__text-wrapper"]}>
            <div
              className={`${styles["page64__text-box"]} ${styles["page64__text--sister"]}`}
            >
              <p onClick={() => playAudio("pg64_audio5")} style={{ cursor: "pointer" }}>
                My sister Marilia Alves is single. Currently in the Bahamas, on vacation.
              </p>
            </div>
          </div>
        </div>

        {/* Imagem 6 */}
        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--vacation1"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={sextaImagem}
              alt="Imagem 6"
              className={styles["page64__image"]}
            />
          </div>
        </div>

        {/* Imagem 7 */}
        <div
          className={`${styles["page64__image-wrapper"]} ${styles["page64__image--vacation2"]}`}
        >
          <div className={styles["page64__image-container"]}>
            <img
              src={setimaImagem}
              alt="Imagem 7"
              className={styles["page64__image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );

};

export default Pagina64;
