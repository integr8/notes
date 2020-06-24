from gi.repository import Gtk, Gio

class Header:
  def __init__(self, window):
    headerBar = Gtk.HeaderBar()
    headerBar.set_show_close_button(True)
    headerBar.props.title = window.props.title

    if(window.props.title):
      headerBar.props.subtitle = window.props.title

    box = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL)
    menuButton = Gtk.MenuButton()
    menumodel = Gio.Menu()
    menumodel.append("New", "app.new")
    menumodel.append("About", "app.about")
    menumodel.append("Sair", "app.quit")
    menuButton.set_menu_model(menumodel)

    box.add(menuButton)
    headerBar.pack_start(box)

    window.set_titlebar(headerBar)
