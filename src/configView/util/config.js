export const type_radio_button = 'RADIO_BUTTON'
export const type_drop_down = 'DROP_DOWN'

export const css_field_hidden = { display: 'none' }

export const css_field_visible = { display: 'block' }

export const PLUGIN_DATA = kintone.plugin.app.getConfig(kintone.$PLUGIN_ID)

export const setStyle = (el, styles) => {
    for (var property in styles)
        el.style[property] = styles[property];
}