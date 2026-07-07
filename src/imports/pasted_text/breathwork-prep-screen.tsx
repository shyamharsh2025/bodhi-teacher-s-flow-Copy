{
  "screen_name": "Focus Sprint - Breathwork Preparation Screen",
  "screen_type": "mobile_app_screen",
  "platform": "iOS",
  "aspect_ratio": "9:16",
  "target_size": {
    "width": 390,
    "height": 844
  },
  "design_goal": "Create a premium dark-mode Bodhi Focus Sprint breathwork screen. This screen appears after the user chooses '+2 min Breathwork' and before the active focus timer. The purpose is to help the student reset, breathe, and enter a focused state. The design must feel calm, immersive, premium, meditative, and consistent with the previous dark Focus Sprint screens.",
  "visual_style": {
    "theme": "dark premium wellness-tech",
    "mood": "calm, focused, immersive, futuristic but not gimmicky",
    "background": {
      "base_color": "#020713",
      "gradient": "very dark navy-black vertical gradient with subtle blue-violet glow",
      "details": [
        "Background should be darker than standard navy, almost black",
        "Add very subtle vertical light streaks in deep indigo and blue",
        "Add soft ambient glow behind the main orb",
        "Do not make the background noisy or starry",
        "Keep text contrast strong and premium"
      ]
    },
    "accent_colors": {
      "primary_purple": "#6D5BFF",
      "electric_violet": "#8B7CFF",
      "soft_lavender": "#B7AEFF",
      "cyan_glow": "#57D4FF",
      "white": "#FFFFFF",
      "muted_text": "#B7B4D8",
      "card_fill": "rgba(10, 16, 35, 0.74)",
      "card_border": "rgba(139, 124, 255, 0.28)"
    },
    "typography": {
      "font_family": "Inter",
      "title_style": "large, bold, clean, rounded, high contrast",
      "body_style": "medium weight, soft lavender-grey, easy to read",
      "number_style": "very large, bold, glowing purple gradient"
    }
  },
  "layout": {
    "safe_area": true,
    "padding": {
      "horizontal": 24,
      "top": 28,
      "bottom": 20
    },
    "alignment": "centered vertical flow",
    "spacing": "generous, calm, not cramped",
    "scroll": false
  },
  "elements": [
    {
      "type": "status_bar",
      "position": "top",
      "content": {
        "time": "9:41",
        "right_icons": ["cellular", "wifi", "battery"]
      },
      "style": {
        "color": "#FFFFFF",
        "opacity": 0.95
      }
    },
    {
      "type": "top_navigation",
      "position": {
        "top": 72,
        "left": 24,
        "right": 24
      },
      "elements": [
        {
          "type": "circular_icon_button",
          "role": "back",
          "icon": "arrow-left",
          "size": 52,
          "position": "left",
          "background": "rgba(255,255,255,0.055)",
          "border": "rgba(255,255,255,0.06)",
          "icon_color": "#FFFFFF",
          "shadow": "soft inner dark shadow"
        },
        {
          "type": "text_button",
          "role": "skip",
          "text": "Skip",
          "position": "right",
          "font_size": 22,
          "font_weight": 700,
          "color": "#B7AEFF"
        }
      ]
    },
    {
      "type": "pill_label",
      "text": "2 MIN BREATHWORK",
      "position": {
        "top": 136,
        "center_x": true
      },
      "size": {
        "width": 176,
        "height": 44
      },
      "style": {
        "background": "rgba(20, 18, 52, 0.72)",
        "border": "1.5px solid rgba(109,91,255,0.55)",
        "border_radius": 24,
        "text_color": "#FFFFFF",
        "font_size": 14,
        "font_weight": 700,
        "letter_spacing": 0.7,
        "box_shadow": "0 0 22px rgba(109,91,255,0.18)"
      }
    },
    {
      "type": "heading_block",
      "position": {
        "top": 206,
        "center_x": true
      },
      "content": {
        "title": "Let’s reset and focus",
        "subtitle": "Follow the breathing to\nclear your mind."
      },
      "style": {
        "title_font_size": 34,
        "title_font_weight": 800,
        "title_color": "#FFFFFF",
        "title_line_height": 1.1,
        "subtitle_font_size": 22,
        "subtitle_font_weight": 500,
        "subtitle_color": "#B7B4D8",
        "subtitle_line_height": 1.35,
        "text_align": "center",
        "gap": 16
      }
    },
    {
      "type": "animated_breathing_orb",
      "name": "Main breathing orb",
      "position": {
        "top": 350,
        "center_x": true
      },
      "size": {
        "width": 300,
        "height": 300
      },
      "description": "Large premium animated orb used as the breathing guide. It should look like a soft 3D glowing sphere, not a flat circle. The orb should have a deep navy core with violet glow on the upper-left edge and cyan-blue glow on the lower-right edge. It should feel identical in tone to the orb from the existing timer screen, but adapted for breathwork.",
      "style": {
        "shape": "perfect circle / sphere",
        "background": "radial-gradient(circle at 35% 25%, rgba(139,124,255,0.45), rgba(29,35,100,0.55) 35%, rgba(3,8,22,0.88) 62%, rgba(2,6,18,0.96) 100%)",
        "edge_glow": [
          "upper-left rim: bright violet/lavender glow",
          "lower-right rim: soft cyan glow",
          "outer halo: violet-blue blurred glow"
        ],
        "shadow": "0 0 70px rgba(109,91,255,0.38), 0 0 110px rgba(87,212,255,0.16)",
        "border": "1px solid rgba(183,174,255,0.28)",
        "animation_instruction": {
          "type": "breathing_scale_animation",
          "inhale": "orb slowly expands from 96% to 104% scale over 4 seconds",
          "hold": "orb remains still with slightly brighter glow",
          "exhale": "orb contracts back to 96% scale over 6 seconds",
          "loop": true,
          "easing": "smooth ease-in-out"
        }
      },
      "inner_content": [
        {
          "type": "icon",
          "icon": "three-horizontal-waves",
          "position": "top-center inside orb",
          "size": 44,
          "color": "#7D6CFF",
          "top_offset": 80
        },
        {
          "type": "text",
          "text": "Inhale",
          "font_size": 36,
          "font_weight": 800,
          "color": "#FFFFFF",
          "position": "center",
          "y_offset": -12
        },
        {
          "type": "text",
          "text": "4",
          "font_size": 82,
          "font_weight": 900,
          "color": "#7D6CFF",
          "effect": "subtle purple glow",
          "position": "center",
          "y_offset": 58
        },
        {
          "type": "text",
          "text": "seconds",
          "font_size": 24,
          "font_weight": 700,
          "color": "#B7B4D8",
          "position": "center",
          "y_offset": 122
        }
      ]
    },
    {
      "type": "info_card",
      "position": {
        "top": 664,
        "left": 24,
        "right": 24
      },
      "size": {
        "height": 132
      },
      "style": {
        "background": "rgba(9, 14, 32, 0.78)",
        "border": "1px solid rgba(139,124,255,0.22)",
        "border_radius": 22,
        "shadow": "0 20px 50px rgba(0,0,0,0.28)",
        "blur": "subtle glassmorphism"
      },
      "content": {
        "icon": {
          "type": "brain-outline",
          "size": 42,
          "color": "#7D6CFF",
          "position": "left",
          "x": 28,
          "y": 42
        },
        "title": {
          "text": "Why breathwork helps",
          "font_size": 20,
          "font_weight": 800,
          "color": "#FFFFFF",
          "position": {
            "x": 104,
            "y": 32
          }
        },
        "body": {
          "text": "A few deep breaths can reduce stress,\nimprove focus and prepare your mind\nfor deep work.",
          "font_size": 17,
          "font_weight": 500,
          "line_height": 1.48,
          "color": "#B7B4D8",
          "position": {
            "x": 104,
            "y": 66
          }
        }
      }
    },
    {
      "type": "primary_button",
      "position": {
        "left": 24,
        "right": 24,
        "bottom": 58
      },
      "size": {
        "height": 64
      },
      "content": {
        "text": "Continue",
        "right_icon": "arrow-right"
      },
      "style": {
        "background": "linear-gradient(135deg, #7B68FF 0%, #543BEE 100%)",
        "border_radius": 18,
        "text_color": "#FFFFFF",
        "font_size": 24,
        "font_weight": 800,
        "icon_size": 34,
        "shadow": "0 18px 48px rgba(91,70,255,0.45)"
      }
    },
    {
      "type": "privacy_note",
      "position": {
        "bottom": 22,
        "center_x": true
      },
      "content": {
        "icon": "shield-check",
        "text": "Always private. Only for you."
      },
      "style": {
        "icon_color": "#6D5BFF",
        "text_color": "#7D6CFF",
        "font_size": 15,
        "font_weight": 600,
        "gap": 8
      }
    }
  ],
  "important_design_constraints": [
    "Do not add bottom navigation on this screen.",
    "Do not show 'Round 1 of 4'. The breath progress should be communicated by the breathing animation, not workout-style round text.",
    "Do not make the orb a simple flat circle. It must feel like a premium glowing 3D sphere.",
    "Do not use a white/light background.",
    "Do not make the screen playful or childish.",
    "The background must match the previous dark Focus Sprint screens: extremely dark navy-black with subtle violet/blue glow.",
    "Maintain strong text readability and premium spacing.",
    "Keep the central orb as the hero element.",
    "The UI should feel meditative and focused, not like a generic timer app."
  ],
  "interaction_notes": {
    "skip_button": "Skips breathwork and moves directly to active focus timer.",
    "continue_button": "Moves to the active focus timer screen.",
    "orb_animation": "Orb expands and contracts with the breathing cycle.",
    "breath_text_animation": "Text can change across phases: Inhale 4 seconds, Hold 2 seconds, Exhale 6 seconds."
  },
  "copy": {
    "pill": "2 MIN BREATHWORK",
    "title": "Let’s reset and focus",
    "subtitle": "Follow the breathing to\nclear your mind.",
    "breath_phase": "Inhale",
    "breath_count": "4",
    "breath_unit": "seconds",
    "info_title": "Why breathwork helps",
    "info_body": "A few deep breaths can reduce stress,\nimprove focus and prepare your mind\nfor deep work.",
    "button": "Continue",
    "privacy": "Always private. Only for you."
  }
}