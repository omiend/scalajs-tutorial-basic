package tutorial.webapp

// 「org.scalajs.dom」はJavaScript DOMのルートで、JavaScriptのグローバルスコープ（window）に対応
import org.scalajs.dom
// 便宜上、ドキュメント（JavaScriptのドキュメントに対応）を追加インポート
import dom.document

object TutorialApp {
  def main(args: Array[String]): Unit = {
    appendPar(document.body, "Hello World")
  }

  def appendPar(targetNode: dom.Node, text: String): Unit = {
    val parNode = document.createElement("p")
    val textNode = document.createTextNode(text)
    parNode.appendChild(textNode)
    targetNode.appendChild(parNode)
  }
}
