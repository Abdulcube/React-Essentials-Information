import TabButton from "./TabButton";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  const TOPIC_VALUES = ["components", "jsx", "props", "state"];

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;

  tabContent = !selectedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <Section id="examples">
      <Tabs
        buttonsContainer="menu"
        content={TOPIC_VALUES.map((topic) => (
          <TabButton
            key={topic}
            isSelected={selectedTopic === topic}
            onClick={() => handleClick(topic)}
          >
            {topic}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
