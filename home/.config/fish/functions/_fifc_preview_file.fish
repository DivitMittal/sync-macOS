function _fifc_preview_file -d "Preview the selected file with the right tool depending on its type"
    set -l file_type (_fifc_file_type "$fifc_candidate")

    switch $file_type
        case txt
            if type -q bat
                bat --color=always $fifc_bat_opts "$fifc_candidate"
            else
                cat "$fifc_candidate"
            end
        case json
            if type -q bat
                bat --color=always -l json $fifc_bat_opts "$fifc_candidate"
            else
                cat "$fifc_candidate"
            end
        case image
            if type -q wezterm
                wezterm imgcat "$fifc_candidate"
            else if type -q chafa
                  chafa $fifc_chafa_opts "$fifc_candidate"
            else
                  _fifc_preview_file_default "$fifc_candidate"
            end
        case archive
            if type -q ouch
                ouch list -ty $fifc_ouch_opts "$fifc_candidate"
            else
                _fifc_preview_file_default "$fifc_candidate"
            end
        case binary
            if type -q hexyl
                hexyl $fifc_hexyl_opts "$fifc_candidate"
            else
                _fifc_preview_file_default "$fifc_candidate"
            end
    end
end
