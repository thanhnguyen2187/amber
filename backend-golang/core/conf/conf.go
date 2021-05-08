package conf

import (
	"github.com/spf13/viper"
	"log"
)

var Config struct {
	DbDriver             string `mapstructure:"DB_DRIVER"`
	DbSource             string `mapstructure:"DB_SOURCE"`
	SecretKey            string `mapstructure:"SECRET_KEY"`
	ServerPort           int    `mapstructure:"SERVER_PORT"`
	ElasticSearchAddress string `mapstructure:"ELASTICSEARCH_ADDRESS"`
}

func Init() {
	viper.AddConfigPath(".")
	viper.SetConfigName("")
	viper.SetConfigFile(".env")
	viper.AutomaticEnv()

	err := viper.ReadInConfig()
	if err != nil {
		log.Fatalf(
			"Error loading config file: %v",
			err,
		)
	}

	err = viper.Unmarshal(&Config)
	if err != nil {
		log.Fatalf(
			"Error marshaling config file: %v",
			err,
		)
	}
}
