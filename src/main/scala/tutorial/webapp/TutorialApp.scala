package tutorial.webapp

// 「org.scalajs.dom」はJavaScript DOMのルートで、JavaScriptのグローバルスコープ（window）に対応
// import org.scalajs.dom
// 便宜上、ドキュメント（JavaScriptのドキュメントに対応）を追加インポート
// import dom.document
// import scala.scalajs.js.annotation.JSExportTopLevel

import org.querki.jquery._

object TutorialApp {

  def main(args: Array[String]): Unit = {
    // appendPar(document.body, "Hello World")
    $(() => setupUI())
  }

  // DOM操作
  // def appendPar(targetNode: dom.Node, text: String): Unit = {
  //   val parNode = document.createElement("p")
  //   val textNode = document.createTextNode(text)
  //   parNode.appendChild(textNode)
  //   targetNode.appendChild(parNode)
  // }

  // @JSExportTopLevel = Scala.jsコンパイラに、そのメソッドをJavaScriptから最上位関数として呼び出し可能にするよう指示する
  // このアノテーションもインポートする必要あり
  // @JSExportTopLevel("addClickedMessage")
  def addClickedMessage(): Unit = {
    // appendPar(document.body, "You clicked the button!")
    $("body").append("<p>You clicked the button!</p>")
  }

  def setupUI(): Unit = {
    $("body").append("<p>Hello World</p>")

    $("""<button type="button">Click me!</button>""")
      .click(() => addClickedMessage())
      .appendTo($("body"))

    $("#click-me-button").click(() => addClickedMessage())
  }

}
