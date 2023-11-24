import styled from 'styled-components';

const Styles = styled.div`
  div.column-layout-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow: auto;
    gap: 4px;
  }

  .column-layout-dragging-element {
    animation: column-layout-dragging-element-anim 0.2s ease-in-out forwards;
  }

  @keyframes column-layout-dragging-element-anim {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  div.column-layout-column-regular {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    gap: 4px;
    padding: 8px;
  }

  div.column-layout-column-master {
    display: flex;
    flex-direction: column;
    flex: 2;
    width: 100%;
    gap: 4px;
    padding: 8px;
  }

  .column-layout-blinking {
    animation: column-layout-blinking-anim 0.2s linear infinite;
  }

  @keyframes column-layout-blinking-anim {
    50% {
      opacity: 0.3;
    }
  }

  .column-layout-droppable-transition {
    animation: column-layout-droppable-transition-anim 0.2s ease-in-out;
  }

  @keyframes column-layout-droppable-transition-anim {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  .column-layout-draggable-transition {
    animation: column-layout-draggable-transition-anim 0.2s ease-in-out;
  }

  @keyframes column-layout-draggable-transition-anim {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }

  @media screen and (max-width: 1023px) {
    div.column-layout-container {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1535px) {
    div.column-layout-container {
      display: flex;
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1536px) {
    div.column-layout-container {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default Styles;
