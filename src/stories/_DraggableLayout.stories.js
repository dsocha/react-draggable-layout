import DraggableLayout from '../components/DraggableLayout/DraggableLayout';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'DraggableLayout',
  component: DraggableLayout,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <div style={{ width: '100%', height: '100vh' }}>
    <DraggableLayout {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isDarkMode: false,
  columns: 3,
  mainColumnIndex: 1,
  draggable: true,
  components: [
    { col: 0, id: 'Component 1', component: <div style={{ height: '120px', backgroundColor: 'rgb(125 211 252)', borderRadius: '1rem', padding: '24px', boxShadow: '0 8px 10px -4px #cccccc' }}>Component #1</div> },
    { col: 0, id: 'Component 2', component: <div style={{ height: '180px', backgroundColor: 'rgb(153 246 228)', borderRadius: '1rem', padding: '24px', boxShadow: '0 8px 10px -4px #cccccc' }}>Component #2</div> },
    { col: 1, id: 'Component 3', component: <div style={{ height: '300px', backgroundColor: 'rgb(254 202 202)', borderRadius: '1rem', padding: '24px', boxShadow: '0 8px 10px -4px #cccccc' }}>Component #3</div> },
    { col: 1, id: 'Component 4', component: <div style={{ height: '250px', backgroundColor: 'rgb(191 219 254)', borderRadius: '1rem', padding: '24px', boxShadow: '0 8px 10px -4px #cccccc' }}>Component #4</div> },
    { col: 2, id: 'Component 5', component: <div style={{ height: '180px', backgroundColor: 'rgb(254 215 170)', borderRadius: '1rem', padding: '24px', boxShadow: '0 8px 10px -4px #cccccc' }}>Component #5</div> },
  ],
  onChange: (c) => {
    console.log('onChange()', c);
  },
};
