{
  "screen_name": "Focus Sprint - Active Timer With Pause And End Controls",
  "screen_type": "mobile_app_screen",
  "platform": "iOS",
  "aspect_ratio": "9:16",
  "target_size": {
    "width": 390,
    "height": 844
  },
  "design_goal": "Create a premium dark-mode Bodhi Focus Sprint active timer screen. This screen is used during an active focus session. It must include a prominent timer ring, clear pause and end-session controls, music card, time adjustment controls, and an improve-focus card. The screen should feel calm, locked-in, premium, and consistent with the darker Bodhi Focus Sprint screens.",
  "visual_style": {
    "theme": "dark premium focus timer",
    "mood": "calm, controlled, immersive, premium, serious but not stressful",
    "background": {
      "base_color": "#020713",
      "gradient": "very dark navy-black vertical gradient",
      "details": [
        "Use an almost-black navy background",
        "Add very subtle vertical light streaks in deep indigo and violet",
        "Keep the background darker than the original reference",
        "Add faint purple ambient glow behind the timer ring",
        "Do not make the background noisy, starry, or gaming-like"
      ]
    },
    "colors": {
      "white": "#FFFFFF",
      "muted_lavender": "#B7B4D8",
      "soft_lavender": "#B7AEFF",
      "primary_purple": "#6D5BFF",
      "electric_violet": "#8A76FF",
      "deep_purple": "#4B32E8",
      "danger_red": "#FF7777",
      "danger_red_dark": "rgba(255, 90, 100, 0.12)",
      "card_fill": "rgba(8, 13, 31, 0.80)",
      "card_border": "rgba(139, 124, 255, 0.24)",
      "button_fill": "rgba(255, 255, 255, 0.055)"
    },
    "typography": {
      "font_family": "Inter",
      "general_style": "clean, modern, rounded, premium",
      "title": "bold, high contrast, centered",
      "timer": "large, bold, crisp white numerals",
      "body": "medium weight, soft lavender"
    }
  },
  "layout": {
    "safe_area": true,
    "canvas": {
      "width": 390,
      "height": 844
    },
    "padding": {
      "horizontal": 24,
      "top": 26,
      "bottom": 22
    },
    "alignment": "centered vertical stack",
    "scroll": false,
    "spacing_instruction": "Maintain the width proportions from the reference. Keep enough vertical air between sections so the screen does not feel cramped, but ensure all elements remain visible within one iPhone screen."
  },
  "elements": [
    {
      "type": "status_bar",
      "position": {
        "top": 16,
        "left": 30,
        "right": 28
      },
      "content": {
        "time": "9:41",
        "right_icons": ["cellular", "wifi", "battery"]
      },
      "style": {
        "color": "#FFFFFF",
        "opacity": 0.95,
        "font_size": 16,
        "font_weight": 700
      }
    },
    {
      "type": "top_navigation",
      "position": {
        "top": 58,
        "left": 24,
        "right": 24
      },
      "elements": [
        {
          "type": "circular_icon_button",
          "name": "Back button",
          "icon": "arrow-left",
          "size": 46,
          "position": "left",
          "style": {
            "background": "rgba(255,255,255,0.055)",
            "border": "1px solid rgba(139,124,255,0.16)",
            "border_radius": 999,
            "icon_color": "#FFFFFF",
            "icon_size": 28,
            "shadow": "0 10px 28px rgba(0,0,0,0.35)"
          }
        },
        {
          "type": "circular_icon_button",
          "name": "Close session button",
          "icon": "x",
          "size": 46,
          "position": "right",
          "style": {
            "background": "rgba(255,255,255,0.055)",
            "border": "1px solid rgba(139,124,255,0.16)",
            "border_radius": 999,
            "icon_color": "#FFFFFF",
            "icon_size": 27,
            "shadow": "0 10px 28px rgba(0,0,0,0.35)"
          }
        }
      ]
    },
    {
      "type": "heading_block",
      "position": {
        "top": 124,
        "center_x": true
      },
      "content": {
        "title": "Math Assignment – Chapter 3",
        "subtitle": "45 min session"
      },
      "style": {
        "title_font_size": 25,
        "title_font_weight": 800,
        "title_color": "#FFFFFF",
        "title_line_height": 1.15,
        "subtitle_font_size": 18,
        "subtitle_font_weight": 600,
        "subtitle_color": "#B7AEFF",
        "subtitle_line_height": 1.3,
        "text_align": "center",
        "gap": 10
      }
    },
    {
      "type": "timer_ring",
      "name": "Main focus countdown ring",
      "position": {
        "top": 198,
        "center_x": true
      },
      "size": {
        "width": 290,
        "height": 290
      },
      "description": "A large hollow circular timer ring with a sharp, premium neon-purple stroke. The ring should not be a filled orb. The inside remains dark and empty except for timer text. The active progress segment begins and ends with crisp, clean edges.",
      "style": {
        "shape": "perfect circle",
        "ring_type": "hollow progress ring",
        "ring_thickness": 10,
        "track_color": "rgba(109,91,255,0.38)",
        "progress_color": "#755CFF",
        "highlight_segment_color": "#D9CEFF",
        "progress_position": "progress segment begins near 12 o'clock and continues clockwise around the ring",
        "sharpness_instruction": [
          "The beginning and ending of the progress arc must be sharp and clearly defined, not blurry, not melted, not feathered.",
          "Use crisp squared or subtly rounded stroke caps, but the endpoints must remain visibly precise.",
          "The light highlight at the top-right should have a clean start and clean end.",
          "Avoid overly soft, cloudy, or diffused arc edges.",
          "Keep the neon glow around the ring separate from the actual ring stroke so the stroke itself remains sharp."
        ],
        "glow": {
          "outer": "0 0 34px rgba(109,91,255,0.48), 0 0 72px rgba(109,91,255,0.20)",
          "inner": "0 0 18px rgba(109,91,255,0.22)",
          "note": "Glow should enhance the ring without reducing edge sharpness."
        },
        "center_fill": "transparent / same as background"
      },
      "inner_content": [
        {
          "type": "text",
          "text": "44:59",
          "position": {
            "center_x": true,
            "center_y": true,
            "y_offset": -8
          },
          "style": {
            "font_size": 64,
            "font_weight": 800,
            "color": "#FFFFFF",
            "letter_spacing": -1.4
          }
        },
        {
          "type": "inline_icon_text",
          "position": {
            "center_x": true,
            "center_y": true,
            "y_offset": 66
          },
          "content": {
            "icon": "lock",
            "text": "Stay locked in"
          },
          "style": {
            "icon_size": 18,
            "icon_color": "#7D6CFF",
            "text_font_size": 18,
            "text_font_weight": 600,
            "text_color": "#B7B4D8",
            "gap": 10
          }
        }
      ]
    },
    {
      "type": "session_control_buttons",
      "position": {
        "top": 508,
        "left": 34,
        "right": 34
      },
      "layout": {
        "direction": "horizontal",
        "gap": 20,
        "equal_width": true
      },
      "elements": [
        {
          "type": "pill_button",
          "name": "Pause button",
          "content": {
            "icon": "pause",
            "text": "Pause"
          },
          "size": {
            "height": 54
          },
          "style": {
            "background": "rgba(8, 13, 31, 0.74)",
            "border": "1.2px solid rgba(139,124,255,0.34)",
            "border_radius": 28,
            "icon_color": "#B7AEFF",
            "text_color": "#FFFFFF",
            "font_size": 18,
            "font_weight": 700,
            "icon_size": 24,
            "gap": 12,
            "shadow": "0 14px 34px rgba(0,0,0,0.28)"
          }
        },
        {
          "type": "pill_button",
          "name": "End session button",
          "content": {
            "icon": "x-square",
            "text": "End session"
          },
          "size": {
            "height": 54
          },
          "style": {
            "background": "rgba(255, 90, 100, 0.08)",
            "border": "1.2px solid rgba(255, 118, 118, 0.38)",
            "border_radius": 28,
            "icon_color": "#FF7777",
            "text_color": "#FF8A8A",
            "font_size": 18,
            "font_weight": 700,
            "icon_size": 24,
            "gap": 12,
            "shadow": "0 14px 34px rgba(255,90,100,0.08)"
          }
        }
      ]
    },
    {
      "type": "music_card",
      "position": {
        "top": 582,
        "left": 24,
        "right": 24
      },
      "size": {
        "height": 82
      },
      "style": {
        "background": "rgba(8, 13, 31, 0.80)",
        "border": "1px solid rgba(139,124,255,0.24)",
        "border_radius": 22,
        "shadow": "0 18px 40px rgba(0,0,0,0.30)"
      },
      "content": {
        "left_icon": {
          "type": "music-note",
          "size": 38,
          "color": "#7D6CFF",
          "position": {
            "x": 26,
            "center_y": true
          }
        },
        "title": {
          "text": "Deep Focus · Instrumental",
          "position": {
            "x": 82,
            "y": 22
          },
          "style": {
            "font_size": 20,
            "font_weight": 800,
            "color": "#FFFFFF"
          }
        },
        "subtitle": {
          "text": "Low music",
          "position": {
            "x": 82,
            "y": 52
          },
          "style": {
            "font_size": 17,
            "font_weight": 500,
            "color": "#B7B4D8"
          }
        },
        "right_button": {
          "type": "circular_button",
          "icon": "pause",
          "size": 52,
          "position": {
            "right": 18,
            "center_y": true
          },
          "style": {
            "background": "rgba(255,255,255,0.055)",
            "border": "1px solid rgba(139,124,255,0.12)",
            "icon_color": "#FFFFFF",
            "icon_size": 26
          }
        }
      }
    },
    {
      "type": "time_adjust_section",
      "position": {
        "top": 684,
        "left": 40,
        "right": 40
      },
      "layout": {
        "direction": "horizontal",
        "columns": 3,
        "alignment": "center",
        "distribution": "space-between"
      },
      "elements": [
        {
          "type": "adjust_button_group",
          "name": "Decrease time",
          "position": "left",
          "content": {
            "button_icon": "minus",
            "label": "-10 min"
          },
          "style": {
            "button_size": 62,
            "button_background": "rgba(255,255,255,0.045)",
            "button_border": "1px solid rgba(139,124,255,0.18)",
            "button_border_radius": 999,
            "icon_color": "#FFFFFF",
            "icon_size": 26,
            "label_font_size": 16,
            "label_font_weight": 500,
            "label_color": "#B7B4D8",
            "label_margin_top": 10
          }
        },
        {
          "type": "session_time_stack",
          "name": "Session time",
          "position": "center",
          "content": {
            "time": "45:00",
            "label": "Session time",
            "link": "Edit time"
          },
          "style": {
            "time_font_size": 34,
            "time_font_weight": 800,
            "time_color": "#FFFFFF",
            "label_font_size": 17,
            "label_font_weight": 500,
            "label_color": "#B7B4D8",
            "link_font_size": 17,
            "link_font_weight": 700,
            "link_color": "#7D6CFF",
            "text_align": "center",
            "vertical_gap": 4
          }
        },
        {
          "type": "adjust_button_group",
          "name": "Increase time",
          "position": "right",
          "content": {
            "button_icon": "plus",
            "label": "+10 min"
          },
          "style": {
            "button_size": 62,
            "button_background": "rgba(255,255,255,0.045)",
            "button_border": "1px solid rgba(139,124,255,0.18)",
            "button_border_radius": 999,
            "icon_color": "#FFFFFF",
            "icon_size": 28,
            "label_font_size": 16,
            "label_font_weight": 500,
            "label_color": "#B7B4D8",
            "label_margin_top": 10
          }
        }
      ]
    },
    {
      "type": "improve_focus_card",
      "position": {
        "left": 24,
        "right": 24,
        "bottom": 32
      },
      "size": {
        "height": 86
      },
      "style": {
        "background": "rgba(8, 13, 31, 0.80)",
        "border": "1px solid rgba(139,124,255,0.22)",
        "border_radius": 22,
        "shadow": "0 18px 40px rgba(0,0,0,0.30)"
      },
      "content": {
        "left_icon": {
          "type": "sparkle-star",
          "size": 36,
          "color": "#E6C7FF",
          "glow": "0 0 22px rgba(139,124,255,0.45)",
          "position": {
            "x": 24,
            "center_y": true
          }
        },
        "title": {
          "text": "Improve your focus",
          "position": {
            "x": 78,
            "y": 23
          },
          "style": {
            "font_size": 20,
            "font_weight": 800,
            "color": "#FFFFFF"
          }
        },
        "subtitle": {
          "text": "Tips & tools to go deeper",
          "position": {
            "x": 78,
            "y": 54
          },
          "style": {
            "font_size": 17,
            "font_weight": 500,
            "color": "#B7B4D8"
          }
        },
        "right_icon": {
          "type": "chevron-right",
          "size": 28,
          "color": "#FFFFFF",
          "position": {
            "right": 28,
            "center_y": true
          }
        }
      }
    }
  ],
  "copy": {
    "task_title": "Math Assignment – Chapter 3",
    "session_length": "45 min session",
    "timer": "44:59",
    "lock_text": "Stay locked in",
    "pause_button": "Pause",
    "end_button": "End session",
    "music_title": "Deep Focus · Instrumental",
    "music_subtitle": "Low music",
    "time_value": "45:00",
    "time_label": "Session time",
    "edit_time": "Edit time",
    "minus_label": "-10 min",
    "plus_label": "+10 min",
    "improve_title": "Improve your focus",
    "improve_subtitle": "Tips & tools to go deeper"
  },
  "interaction_notes": {
    "back_button": "Returns to previous Focus Sprint screen.",
    "close_button": "Shows exit confirmation or closes the session flow.",
    "pause_button": "Pauses the focus timer. When paused, this can change to Resume.",
    "end_session_button": "Triggers a confirmation dialog before ending the session early.",
    "music_pause_button": "Pauses or resumes the focus background music only.",
    "minus_button": "Reduces planned session length by 10 minutes.",
    "plus_button": "Increases planned session length by 10 minutes.",
    "edit_time": "Opens custom session duration selector.",
    "improve_focus_card": "Opens focus tips or tools."
  },
  "important_design_constraints": [
    "Do not use a filled orb on this timer screen.",
    "Use a hollow glowing timer ring only.",
    "The timer ring endpoints must be sharp and intentional. The start and end of the progress arc should not appear blurry, smudged, melted, or randomly faded.",
    "Separate the crisp ring stroke from the glow layer: the glow can be soft, but the ring stroke must remain clean.",
    "Do not make the UI look like a gaming neon interface.",
    "Do not add bottom navigation.",
    "Do not make the pause and end buttons too large or visually aggressive.",
    "End session should be visible but not panic-inducing; use soft red, not harsh red.",
    "Keep the screen darker than the old Figma Make timer screen.",
    "Maintain premium Bodhi visual language: dark navy-black, purple glow, rounded cards, glassy depth, calm typography.",
    "All text must remain highly readable.",
    "Keep the layout close to the provided reference but slightly balanced vertically to avoid cramped spacing."
  ]
}