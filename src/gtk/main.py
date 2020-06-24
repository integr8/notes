import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk, Gio
import sys
from interface.header import Header

class Window(Gtk.ApplicationWindow):
  def __init__(self, application):
    Gtk.ApplicationWindow.__init__(self, title="Testando headerbar", application=application)
    self.set_default_size(600, 400)

class Application(Gtk.Application):
  def __init__(self):
    Gtk.Application.__init__(self)

  def do_activate(self):
    window = Window(self)

    Header(window)

    notebook = Gtk.Notebook()
    page1 = Gtk.Box()
    page1.set_border_width(10)
    page1.add(Gtk.Label('Conteudo container'))
    notebook.append_page(page1, Gtk.Image.new_from_icon_name(
                "help-about",
                Gtk.IconSize.MENU
            ))
    page2 = Gtk.Box()
    page2.set_border_width(10)
    page2.add(Gtk.Label('Conteudo blaus'))
    notebook.append_page(page2, Gtk.Image.new_from_icon_name(
                "help-about",
                Gtk.IconSize.MENU
            ))
    window.add(notebook)

    window.show_all()

  def do_startup(self):
    Gtk.Application.do_startup(self)


    quit_action = Gio.SimpleAction(name="quit")
    quit_action.connect("activate", self.quit_callback)
    self.add_action(quit_action)


  def quit_callback(self, action, parameter):
      print("You clicked \"Quit\"")
      self.quit()

x = Application()
exit_status = x.run(sys.argv)
sys.exit(exit_status)
