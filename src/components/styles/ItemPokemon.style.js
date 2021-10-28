import styled, { css, keyframes } from "styled-components";
import { typeColors } from "../../data/pokemonTypes.js";

const skeleton = keyframes`
100% {
    background-position: -100% 0;
  }
`;

const loadingAnimation = css`
background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${skeleton} 2s infinite;
}
`;

export const StyledItemPokemon = styled.div`
   {
    display: flex;
    flex-basis: calc(33% - 10px);
    flex-grow: 1;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #f2f2f2;
    height: 130px;
    min-width: 350px;
    max-width: 430px;
    box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 6px;
    background: #f2f2f2;
  }
  h3 {
    margin: 0 auto;
  }
  @media (max-width: 400px) {
     {
      min-width: 250px;
    }
    h3 {
      font-size: 1.25rem;
      margin-top: 20px;
    }
  }
`;

export const ImageContainer = styled.figure`
   {
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 120px;
    height: 100%;
    background: #f2f2f2;
  }
`;

export const LoadingImageContainer = styled(ImageContainer)`
  &:before {
    display: inline-block;
    content: "";
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    ${loadingAnimation};
  }
`;

const ContainerPokemonDataModel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const ContainerPokemonData = styled(ContainerPokemonDataModel)`
   {
    background: ${(props) => {
      let colors = [];
      for (let i = 0; i < props.props.length; i++) {
        let color = typeColors.find(
          (type) => type.type === props.props[i].type.name
        );
        colors.push(color.color);
      }
      if (props.props.length === 1) {
        return `${colors[0]}85`;
      } else {
        return `linear-gradient(90deg,${colors[0]}85,${colors[1]}85)`;
      }
    }};
  }
`;

export const LoadingContainerPokemonData = styled(ContainerPokemonDataModel)``;

export const IdPokemon = styled.span`
   {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 25px;
    width: 38px;
    background-color: #f2f2f2;
    border-bottom-right-radius: 45%;
    font-weight: 600;
    color: black;
  }
`;

export const LoadingIdPokemon = styled(IdPokemon)`
  ${loadingAnimation};
`;

export const LoadingNamePokemon = styled.h3`
  margin-top: 10px;
  height: 25px;
  width: 175px;
  border-radius: 10px;
  ${loadingAnimation};

  @media (max-width: 400px) {
    width: 85%;
  }
`;

export const ContainerTypePokemon = styled.div`
   {
    margin-top: 10px;
  }

  span:first-child {
    margin-right: 10px;
  }

  @media (max-width: 400px) {
     {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
    }

    span:first-child {
      margin-right: 0;
      margin-bottom: 8px;
    }
  }
`;

export const LoadingContainerTypePokemon = styled.div`
  margin-top: 10px;
  text-align: center;
  height: 25px;
  width: 175px;
  border-radius: 10px;
  ${loadingAnimation};
  @media (max-width: 400px) {
    width: 85%;
  }
`;

export const TypePokemon = styled.span`
  display: inline-block;
  flex-basis: 50%;
  padding: 2px 15px;
  border-radius: 5px;
  background-color: ${(props) => {
    let backgroundColor = typeColors.find(
      (type) => type.type === props.type.name
    );
    return backgroundColor.color;
  }};
  color: ${(props) => {
    let textColor = typeColors.find((type) => type.type === props.type.name);
    return textColor.textColor;
  }};
  @media (max-width: 400px) {
     {
      font-size: 0.875rem;
    }
  }
`;
