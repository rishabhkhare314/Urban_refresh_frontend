import React, { Component } from "react";
import { Accordion, Icon, Header, Divider } from "semantic-ui-react";
import style from "./style.module.css";

export default class Faq extends Component {
  state = { activeIndex: 0 };

  constructor(props) {
    super(props);

    this.state = {
      faqList: [
        {
          title: "   What is a dog?",
          content: `A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.`
        },
        {
          title: "   What is a dog?",
          content: `A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.`
        },
        {
          title: "   What is a dog?",
          content: `A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.`
        },
        {
          title: "   What is a dog?",
          content: `A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.`
        },
        {
          title: "   What is a dog?",
          content: `A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.`
        },
        {
          title: "   What is a dog?",
          content: `A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.`
        },
        {
          title: "   What is a dog?",
          content: `A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.`
        }
      ]
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className={style.Faq} id="faq">
        <div className={style.FaqBody}>
          <Header as="h2">FAQ</Header>
          <Divider />
          <Accordion>
            {this.state.faqList.map((f, i) => {
              return (
                <div className={style.faqLists} key={i}>
                  <Accordion.Title
                    active={activeIndex === i}
                    index={i}
                    onClick={this.handleClick}
                    className=""
                  >
                    <Icon
                      name="dropdown"
                      className={style.arrowDown}
                      corner="top right"
                    />
                    What is a dog?
                  </Accordion.Title>
                  <Accordion.Content
                    active={activeIndex === i}
                    className={style.faqContent}
                  >
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </Accordion.Content>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    );

    /* <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
          className="FAQQ"
        >
          <Icon name="dropdown" className="ARROW-Down" />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content> */

    /* 
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            How do you acquire a dog?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              Three common ways for a prospective owner to acquire a dog is from
              pet shops, private owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog
              from a private owner allows you to assess the pedigree and
              upbringing of your dog before choosing to take it home. Lastly,
              finding your dog from a shelter, helps give a good home to a dog who
              may not find one so readily.
            </p>
          </Accordion.Content> */

    // );
  }
}
