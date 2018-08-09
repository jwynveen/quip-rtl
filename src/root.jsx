import quip from "quip";
import App from "./App.jsx";

class RtlTextRoot extends quip.apps.RootRecord {
  static getProperties() {
    return {
      rtlText: quip.apps.RichTextRecord
    };
  }
}
quip.apps.registerClass(RtlTextRoot, "root");

quip.apps.initialize({
  initializationCallback: function(rootNode, params) {
    let rootRecord = quip.apps.getRootRecord();
    if (params.isCreation) {
      rootRecord.set("rtlText", {});
    }
    ReactDOM.render(
      <App richTextRecord={rootRecord.get("rtlText")}/>,
      rootNode);
  },
});
