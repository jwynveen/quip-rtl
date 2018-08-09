import Styles from "./App.less";
export default class App extends React.Component {
  static propTypes = {
    richTextRecord: React.PropTypes.instanceOf(quip.apps.RichTextRecord).isRequired,
  }

  render() {
    const allowedStyles = [
      quip.apps.RichTextRecord.Style.TEXT_PLAIN,
      quip.apps.RichTextRecord.Style.TEXT_H1,
      quip.apps.RichTextRecord.Style.TEXT_H2,
      quip.apps.RichTextRecord.Style.TEXT_H3,
      quip.apps.RichTextRecord.Style.TEXT_CODE,
      quip.apps.RichTextRecord.Style.TEXT_BLOCKQUOTE,
      quip.apps.RichTextRecord.Style.TEXT_PULL_QUOTE,
      quip.apps.RichTextRecord.Style.LIST_BULLET,
      quip.apps.RichTextRecord.Style.LIST_NUMBERED,
      quip.apps.RichTextRecord.Style.LIST_CHECKLIST,
      quip.apps.RichTextRecord.Style.HORIZONTAL_RULE,
      quip.apps.RichTextRecord.Style.IMAGE,
    ];
    return <div className={Styles.rtl}>
      <quip.apps.ui.RichTextBox
        width={800}
        useDocumentTheme={true}
        record={this.props.richTextRecord}
        allowedStyles={allowedStyles}
      />
    </div>;
  }
}
