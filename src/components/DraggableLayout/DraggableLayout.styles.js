import styled from 'styled-components';

const Styles = styled.div`
  height: 100%;
  width: 100%;

  div.draggable-layout-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow: auto;
    gap: 4px;
  }

  .draggable-layout-dragging-element {
    animation: draggable-layout-dragging-element-anim 0.2s ease-in-out forwards;
  }

  @keyframes draggable-layout-dragging-element-anim {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  div.draggable-layout-column-regular {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    gap: 4px;
    padding: 8px;
  }

  div.draggable-layout-column-master {
    display: flex;
    flex-direction: column;
    flex: 2;
    width: 100%;
    gap: 4px;
    padding: 8px;
  }

  .draggable-layout-blinking {
    animation: draggable-layout-blinking-anim 0.4s linear infinite;
  }

  @keyframes draggable-layout-blinking-anim {
    50% {
      opacity: 0.7;
    }
  }

  .draggable-layout-droppable-transition {
    animation: draggable-layout-droppable-transition-anim 0.2s ease-in-out;
  }

  @keyframes draggable-layout-droppable-transition-anim {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  .draggable-layout-draggable-transition {
    animation: draggable-layout-draggable-transition-anim 0.2s ease-in-out;
  }

  @keyframes draggable-layout-draggable-transition-anim {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  @media screen and (max-width: 1023px) {
    div.draggable-layout-container {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1535px) {
    div.draggable-layout-container {
      display: flex;
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1536px) {
    div.draggable-layout-container {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default Styles;
