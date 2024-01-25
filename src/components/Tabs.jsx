export default function Tabs({ content, children, buttonsContainer = "menu" }) {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{content}</ButtonsContainer>
      {children}
    </>
  );
}
