# Puppy Bowl in React

- [x] Render a list for each player
- [x] See details button for each player
- [ ] Details page for each player
- [ ] Create new player button
- [ ] Search feature for each player
- [ ] Delete Button for players created by us

### Biggest project takeaways

- Passing information can only happen from parent to a child, you can pass information from child to child, or child to parent.
- Props are used to pass down information.
  1. in parent create constant for details const. [x, setX] = useState({})
  2. pass prop to component. <Component setX={setX} />
  3. in child you want to receive information, add prop to component const parenthesis. const ComponentOne = ({setX}) => {}
  4. This information is now connected to the child and can be used as needed.
- You can use components in ternary functions!!! This is super cool. So many possibilities with that functionality.
