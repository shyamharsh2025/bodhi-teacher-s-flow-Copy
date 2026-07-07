{
  "screen_name": "Focus Sprint - Loop Closed Completion Screen",
  "screen_type": "mobile_app_screen",
  "platform": "iOS",
  "aspect_ratio": "9:16",
  "target_size": {
    "width": 390,
    "height": 844
  },
  "design_goal": "Create a premium dark-mode Bodhi Focus Sprint completion screen shown after a successful focus session. The screen should celebrate completion without feeling childish or overly gamified. It should feel calm, rewarding, premium, and consistent with the dark Focus Sprint flow. The user should feel that the focus loop has been closed successfully and be encouraged to optionally lock in what they studied.",
  "visual_style": {
    "theme": "dark premium wellness achievement",
    "mood": "satisfying, calm, celebratory, focused, premium, emotionally rewarding",
    "background": {
      "base_color": "#020713",
      "gradient": "very dark navy-black vertical gradient",
      "details": [
        "Make the background slightly darker than the original reference",
        "Use subtle vertical indigo/violet light streaks to match the other dark Focus Sprint screens",
        "Add a soft purple glow behind the achievement circle",
        "Keep the screen premium and calm, not loud or childish",
        "Use confetti sparingly and elegantly"
      ]
    },
    "accent_colors": {
      "primary_purple": "#6D5BFF",
      "electric_violet": "#8A76FF",
      "soft_lavender": "#B7AEFF",
      "gold": "#FFC84D",
      "success_green": "#63C96B",
      "karma_green": "#8EF28D",
      "white": "#FFFFFF",
      "muted_text": "#B7B4D8",
      "secondary_text": "#8F8AAE",
      "card_fill": "rgba(8, 13, 31, 0.80)",
      "card_border": "rgba(139, 124, 255, 0.24)"
    },
    "typography": {
      "font_family": "Inter",
      "title_style": "large, bold, clean, rounded, premium",
      "body_style": "soft lavender-grey, readable, medium weight",
      "stat_number_style": "large, bold, white",
      "button_style": "bold, centered, premium"
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
      "bottom": 20
    },
    "alignment": "centered vertical flow",
    "scroll": false,
    "spacing_notes": [
      "Keep the layout close to the provided reference",
      "Maintain enough breathing room between hero celebration, title, stats, progress, lock-in card, and bottom actions",
      "Avoid overcrowding the lower half",
      "The screen should feel balanced and complete in one viewport"
    ]
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
        "font_weight": 700"
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
          "type": "icon_button",
          "name": "Stats shortcut",
          "icon": "bar-chart-up",
          "size": 34,
          "position": "right",
          "style": {
            "background": "transparent",
            "icon_color": "#FFFFFF",
            "icon_size": 30
          }
        }
      ]
    },
    {
      "type": "celebration_confetti",
      "position": {
        "top": 86,
        "center_x": true
      },
      "size": {
        "width": 330,
        "height": 180
      },
      "style": {
        "density": "medium-light",
        "colors": ["#6D5BFF", "#8A76FF", "#FFC84D", "#57D4FF", "#63C96B", "#FF8FA3"],
        "shape": "small rounded confetti strokes and dots",
        "opacity": 0.9,
        "spread": "wide arc around the achievement circle",
        "instruction": "Confetti should feel elegant and sparse, not birthday-party heavy."
      },
      "animation_instruction": {
        "if_supported": true,
        "type": "subtle_confetti_fall",
        "duration": "1.2s",
        "easing": "ease-out",
        "behavior": "confetti appears outward from center, floats slightly, then settles/fades"
      }
    },
    {
      "type": "achievement_badge",
      "name": "Loop closed badge with animated tick",
      "position": {
        "top": 150,
        "center_x": true
      },
      "size": {
        "width": 130,
        "height": 130
      },
      "description": "A glowing circular achievement badge with a central white checkmark. The ring uses purple and gold. It should feel like a completed loop, not just a generic success icon.",
      "style": {
        "outer_ring": {
          "shape": "circle",
          "stroke_width": 8,
          "stroke_gradient": "purple on the left/bottom, gold on the right/top-right",
          "glow": "0 0 34px rgba(109,91,255,0.45), 0 0 30px rgba(255,200,77,0.22)",
          "edge_quality": "crisp ring edges with soft glow around it"
        },
        "inner_fill": "radial-gradient(circle at center, rgba(109,91,255,0.42), rgba(10,16,35,0.92))",
        "checkmark": {
          "icon": "check",
          "color": "#FFFFFF",
          "size": 58,
          "stroke_width": 7,
          "glow": "0 0 18px rgba(255,255,255,0.42)"
        }
      },
      "animation_instruction": {
        "if_supported": true,
        "recommended_for_figma_make": "Create the static final state and describe animation in the prototype notes.",
        "developer_animation_later": {
          "tick_animation": "Draw the checkmark stroke from left to right over 450ms using ease-out.",
          "badge_animation": "Badge scales from 0.86 to 1.04 to 1.0 over 550ms.",
          "glow_animation": "Outer glow softly pulses once after tick completes.",
          "ring_animation": "Gold-purple ring completes a quick circular sweep before settling.",
          "confetti_animation": "Confetti bursts lightly after the tick draw completes."
        }
      }
    },
    {
      "type": "title_block",
      "position": {
        "top": 328,
        "center_x": true
      },
      "content": {
        "title": "Loop Closed",
        "inline_icon": "green-check-circle",
        "subtitle": "You stayed focused.\nGreat work!"
      },
      "style": {
        "title_font_size": 42,
        "title_font_weight": 800,
        "title_color": "#FFFFFF",
        "title_line_height": 1.05,
        "title_alignment": "center",
        "inline_icon_size": 34,
        "inline_icon_color": "#63C96B",
        "inline_icon_position": "right of title baseline",
        "subtitle_font_size": 22,
        "subtitle_font_weight": 600,
        "subtitle_color": "#B7B4D8",
        "subtitle_line_height": 1.35,
        "subtitle_alignment": "center",
        "gap": 16
      }
    },
    {
      "type": "stats_cards_row",
      "position": {
        "top": 442,
        "left": 44,
        "right": 44
      },
      "layout": {
        "columns": 2,
        "gap": 16
      },
      "cards": [
        {
          "type": "stat_card",
          "name": "Focus time card",
          "size": {
            "height": 90
          },
          "content": {
            "number": "45:00",
            "label": "Focus time"
          },
          "style": {
            "background": "rgba(8, 13, 31, 0.80)",
            "border": "1px solid rgba(139,124,255,0.26)",
            "border_radius": 18,
            "number_font_size": 30,
            "number_font_weight": 800,
            "number_color": "#FFFFFF",
            "label_font_size": 17,
            "label_font_weight": 600,
            "label_color": "#FFFFFF",
            "text_align": "center",
            "shadow": "0 16px 36px rgba(0,0,0,0.28)"
          }
        },
        {
          "type": "stat_card",
          "name": "Karma reward card",
          "size": {
            "height": 90
          },
          "content": {
            "number": "+25",
            "label": "Karma points"
          },
          "style": {
            "background": "rgba(8, 13, 31, 0.80)",
            "border": "1px solid rgba(139,124,255,0.26)",
            "border_radius": 18,
            "number_font_size": 30,
            "number_font_weight": 800,
            "number_color": "#FFFFFF",
            "label_font_size": 17,
            "label_font_weight": 600,
            "label_color": "#B7B4D8",
            "text_align": "center",
            "shadow": "0 16px 36px rgba(0,0,0,0.28)"
          }
        }
      ]
    },
    {
      "type": "progress_summary_row",
      "position": {
        "top": 562,
        "left": 44,
        "right": 44
      },
      "layout": {
        "columns": 2,
        "gap": 38
      },
      "items": [
        {
          "type": "progress_item",
          "name": "Sessions today",
          "content": {
            "label": "Sessions today",
            "value": "1 of 3"
          },
          "style": {
            "label_font_size": 16,
            "label_font_weight": 600,
            "label_color": "#8F8AAE",
            "value_font_size": 20,
            "value_font_weight": 800,
            "value_color": "#FFFFFF",
            "progress_track_color": "rgba(139,124,255,0.16)",
            "progress_fill_color": "#6D5BFF",
            "progress_height": 8,
            "progress_radius": 999,
            "progress_value": 0.33,
            "text_align": "left"
          }
        },
        {
          "type": "progress_item",
          "name": "Current streak",
          "content": {
            "label": "Current streak",
            "value": "3 days",
            "emoji": "🔥"
          },
          "style": {
            "label_font_size": 16,
            "label_font_weight": 600,
            "label_color": "#8F8AAE",
            "value_font_size": 20,
            "value_font_weight": 800,
            "value_color": "#FFFFFF",
            "emoji_size": 24,
            "progress_track_color": "rgba(139,124,255,0.16)",
            "progress_fill_color": "rgba(139,124,255,0.34)",
            "progress_height": 8,
            "progress_radius": 999,
            "progress_value": 0.0,
            "text_align": "left"
          }
        }
      ]
    },
    {
      "type": "lock_in_card",
      "position": {
        "top": 660,
        "left": 32,
        "right": 32
      },
      "size": {
        "height": 96
      },
      "style": {
        "background": "rgba(8, 13, 31, 0.82)",
        "border": "1px solid rgba(139,124,255,0.24)",
        "border_radius": 22,
        "shadow": "0 18px 42px rgba(0,0,0,0.32)"
      },
      "content": {
        "left_icon_container": {
          "shape": "circle",
          "size": 58,
          "background": "rgba(255,255,255,0.06)",
          "position": {
            "x": 18,
            "center_y": true
          }
        },
        "left_icon": {
          "type": "lock",
          "size": 30,
          "color": "#8EF28D",
          "position": {
            "x": 32,
            "center_y": true
          }
        },
        "title": {
          "text": "Lock in what you studied",
          "position": {
            "x": 96,
            "y": 22
          },
          "style": {
            "font_size": 19,
            "font_weight": 800,
            "color": "#FFFFFF"
          }
        },
        "subtitle": {
          "text": "Reinforce your focus and\nearn extra karma points.",
          "position": {
            "x": 96,
            "y": 52
          },
          "style": {
            "font_size": 16,
            "font_weight": 500,
            "line_height": 1.35,
            "color": "#B7B4D8"
          }
        },
        "right_icon": {
          "type": "chevron-right",
          "size": 28,
          "color": "#FFFFFF",
          "position": {
            "right": 22,
            "center_y": true
          }
        }
      }
    },
    {
      "type": "primary_button",
      "position": {
        "left": 32,
        "right": 32,
        "top": 780
      },
      "size": {
        "height": 58
      },
      "content": {
        "text": "Done"
      },
      "style": {
        "background": "linear-gradient(135deg, #7B68FF 0%, #543BEE 100%)",
        "border_radius": 18,
        "text_color": "#FFFFFF",
        "font_size": 22,
        "font_weight": 800,
        "shadow": "0 18px 48px rgba(91,70,255,0.42)"
      }
    },
    {
      "type": "text_button",
      "position": {
        "top": 854,
        "center_x": true
      },
      "content": {
        "text": "View Summary"
      },
      "style": {
        "font_size": 18,
        "font_weight": 700,
        "color": "#B7AEFF"
      }
    }
  ],
  "copy": {
    "title": "Loop Closed",
    "subtitle": "You stayed focused.\nGreat work!",
    "focus_time": "45:00",
    "focus_time_label": "Focus time",
    "karma_reward": "+25",
    "karma_label": "Karma points",
    "sessions_today_label": "Sessions today",
    "sessions_today_value": "1 of 3",
    "current_streak_label": "Current streak",
    "current_streak_value": "3 days",
    "lock_card_title": "Lock in what you studied",
    "lock_card_subtitle": "Reinforce your focus and\nearn extra karma points.",
    "primary_button": "Done",
    "secondary_button": "View Summary"
  },
  "interaction_notes": {
    "back_button": "Returns to previous screen or session summary flow.",
    "stats_icon": "Opens focus stats or journey summary.",
    "lock_in_card": "Opens optional reflection screen where the user writes what they studied.",
    "done_button": "Returns to home or Focus Sprint entry point.",
    "view_summary_button": "Opens detailed session summary."
  },
  "animation_notes": {
    "tick_mark": {
      "recommended_final_implementation": "Implement later in Flutter using CustomPainter/Rive/Lottie for precise control.",
      "motion": "White checkmark draws in from left to right over 450ms, then the badge scales from 0.86 to 1.04 to 1.0.",
      "glow": "After tick completes, the badge gives one soft purple-gold glow pulse.",
      "confetti": "Small confetti pieces burst outward gently and fade/settle within 1.2 seconds.",
      "figma_make_instruction": "If animation is supported, create the final visual state and add prototype motion notes. Do not distort the badge or tick mark."
    }
  },
  "important_design_constraints": [
    "Replace '+24 Dopameter' with '+25 Karma points'.",
    "Do not show Dopameter reward on this screen because Dopameter represents state, not session reward.",
    "Keep the background darker than the original reference and consistent with the other dark Focus Sprint screens.",
    "Celebration should feel premium and restrained, not childish.",
    "Use confetti lightly and elegantly.",
    "Keep the achievement badge crisp with a purple-gold completed loop ring.",
    "The checkmark must be clean, centered, and visually strong.",
    "Do not add bottom navigation.",
    "Maintain strong readability across all text.",
    "Make the lock-in card optional and inviting, not mandatory or guilt-inducing.",
    "Preserve the Bodhi visual language: deep navy-black, purple glow, rounded glass cards, calm typography, emotionally rewarding completion."
  ]
}